import Profile from './profile/profile';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login/login.tsx';
import LogoutButton from './logout/logout.tsx';
const Home = () => {
    const { isAuthenticated } = useAuth0();
    console.log(isAuthenticated)
    return (
        <div>
            <h1>Home</h1>
            <Profile></Profile>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
    )
}

export default Home;