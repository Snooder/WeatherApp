import React from 'react';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavIconButton = ({ handleSearchOpen, handleFavoritesOpen, location }) => {
    return (
        <div className="navLinks">
            <IconButton component={Link} to="/search" color="inherit" className={`iconButton navButton ${location.pathname === '/search' ? 'active' : ''}`} onClick={handleSearchOpen}>
                <SearchIcon sx={{ fontSize: 40, color: 'white' }} />
            </IconButton>
            <IconButton component={Link} to="/favorites" color="inherit" className={`iconButton navButton ${location.pathname === '/favorites' ? 'active' : ''}`} onClick={handleFavoritesOpen}>
                <FavoriteIcon sx={{ fontSize: 40, color: 'white' }} />
            </IconButton>
            <IconButton component={Link} to="/calendar" color="inherit" className={`iconButton navButton ${location.pathname === '/calendar' ? 'active' : ''}`}>
                <CalendarMonthIcon sx={{ fontSize: 40, color: 'white' }} />
            </IconButton>
            <IconButton component={Link} to="/globe" color="inherit" className={`iconButton navButton ${location.pathname === '/globe' ? 'active' : ''}`}>
                <PublicIcon sx={{ fontSize: 40, color: 'white' }} />
            </IconButton>
            <IconButton component={Link} to="/profile" color="inherit" className={`iconButton navButton ${location.pathname === '/profile' ? 'active' : ''}`}>
                <AccountCircleIcon sx={{ fontSize: 40, color: 'white' }} />
            </IconButton>
        </div>
    );
};

export default NavIconButton;
