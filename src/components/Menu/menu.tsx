import './menu.css';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import menuIcon from '../../assets/menuIcon.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BasicMenu() {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose() {
        setAnchorEl(null);
    };

    function sendEdition() {
        setAnchorEl(null);
        navigate('/Edit');
    }

    return (
        <div>
            <Button
                className='btnMenu'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={menuIcon} alt="Menu" title='Menu' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className='menuItem'>
                    Escala:<span className='scale'>Celsius</span>
                </MenuItem>
                <MenuItem onClick={sendEdition}>Alterar dados</MenuItem>
                <MenuItem onClick={handleClose}>Fechar</MenuItem>
            </Menu>
        </div>
    );
}

export default BasicMenu;