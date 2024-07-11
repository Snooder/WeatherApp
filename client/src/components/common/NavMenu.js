import React from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Brightness2Icon from '@mui/icons-material/Brightness2'; // Crescent moon icon

const NavMenu = ({ anchorEl, handleMenuClose, toggleNightMode }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
                style: {
                    marginTop: '20px',
                },
            }}
        >
            <MenuItem component={Link} to="/search" onClick={handleMenuClose}>
                <ListItemIcon>
                    <SearchIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Search" />
            </MenuItem>
            <MenuItem component={Link} to="/favorites" onClick={handleMenuClose}>
                <ListItemIcon>
                    <FavoriteIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
            </MenuItem>
            <MenuItem component={Link} to="/calendar" onClick={handleMenuClose}>
                <ListItemIcon>
                    <CalendarMonthIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
            </MenuItem>
            <MenuItem component={Link} to="/globe" onClick={handleMenuClose}>
                <ListItemIcon>
                    <PublicIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Globe" />
            </MenuItem>
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                <ListItemIcon>
                    <AccountCircleIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </MenuItem>
            <MenuItem component={Link} to="/howtohelp" onClick={handleMenuClose}>
                <ListItemIcon>
                    <VolunteerActivismIcon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="How to Help" />
            </MenuItem>
            <MenuItem onClick={() => { toggleNightMode(); handleMenuClose(); }}>
                <ListItemIcon>
                    <Brightness2Icon sx={{ color: 'black' }} />
                </ListItemIcon>
                <ListItemText primary="Night Mode" />
            </MenuItem>
        </Menu>
    );
};

export default NavMenu;
