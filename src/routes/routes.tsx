import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/Home.tsx';

const MainRoutes = () => {
    return (
       <BrowserRouter>
           <Routes>
                <Route path='/' element={<Home/>}/>
           </Routes>
       </BrowserRouter>
    );
};

export default MainRoutes;