import './sideBar.css';
import {AddReaction} from "@mui/icons-material";

const SideBar = ({isOpen}: {isOpen: boolean}) => {

    return (
        <div className={`sideBar ${isOpen ? 'open' : 'closed'}`}>
            <div className='links'>
                <a href="https://www.google.com">
                    {isOpen ? 'Cadastro de Titulo' : <AddReaction />}
                </a>
            </div>
            <div className='links'>
                <a href="https://www.google.com">
                    {isOpen ? 'Cadastro de Membros' : <AddReaction />}
                </a>
            </div>
            <div className='links'>
                <a href="https://www.google.com">
                    {isOpen ? 'Listagem de Vinculos' : <AddReaction />}
                </a>
            </div>
            <div className='links'>
                <a href="https://www.google.com">
                    {isOpen ? 'Cadastro de Quadras' : <AddReaction />}
                </a>
            </div>
        </div>
    )
}

export default SideBar;