import SideBar from '../sideBar/sideBar.tsx';
import Header from '../header/header.tsx';
import './layout.css';
import {useState} from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="layout">
            <Header toggleSidebar={toggleSidebar}/>
            <div>
                <SideBar isOpen={isOpen} />
                <div className={`content ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
