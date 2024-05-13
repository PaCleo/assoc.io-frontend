import csrf from "../../service/csrf.ts";
import {useEffect, useState} from "react";

function Login() {
    const [csrfToken, setCsrfToken] = useState('')
    const [error, setError] = useState('');


    useEffect(() => {
            csrf().then(data => setCsrfToken(data.csrfToken))
    }, [])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const csrfData = await csrf();
        console.log(csrfData);
        try {
            const response = await fetch('http://localhost:3000/auth/google', {
                method: 'POST',
                headers: {
                    'csrfToken': csrfToken,
                },
            });

            if (response.ok) {
                console.log('Login bem-sucedido!');
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <button type="submit">Login</button>
            </form>
            <h3>{error ? error : ''}</h3>
        </div>
    );
}

export default Login;