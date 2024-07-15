import './header.css';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import {useState} from "react";
const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const { user } = useAuth0();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { logout } = useAuth0();

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className='header'>
            <div className='sandwich'>
                <button onClick={toggleSidebar}>
                    <ViewHeadlineIcon />
                </button>
            </div>

            <div className='logo'>
                <img src="src/images/associo.png" alt="Assoc.io" />
            </div>

            <div className="search">
                <input type="text" placeholder="Pesquisar" />
            </div>

            <div className="profile">
                <Avatar src ={user?.picture} alt="Assoc.io" onClick={handleAvatarClick} />
                <Menu className="profile-menu"
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header;