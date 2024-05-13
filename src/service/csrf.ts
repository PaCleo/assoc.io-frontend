
async function csrf() {
    try {
        const response = await fetch('http://localhost:3000/csrf', {
            method: 'GET',
        });
        await response.json();
        console.log('Response:', response);
        return response;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
}

export default csrf