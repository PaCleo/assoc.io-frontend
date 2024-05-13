import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/Home.tsx';
import Login from "../components/login/login.tsx";

const MainRoutes = () => {
    return (
       <BrowserRouter>
           <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default MainRoutes;