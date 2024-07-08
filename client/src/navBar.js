import React, { useState } from "react";
import './navBar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from './Dashboard';
import { Typography, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dashboard from "./Dashboard";
import RemoveZipPanel from "./RemoveZipPanel";

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Router>
            <div>
                <header className='NavBar'>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen} className="iconButton">
                        <MenuIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose} to="/">Home</MenuItem>
                        <MenuItem onClick={handleMenuClose} to="/otherpage">Other Page</MenuItem>
                    </Menu>

                    <div className="logo">
                        <IconButton to="/" color="inherit" className="iconButton">
                            <HomeIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                        <Typography variant="h4" to="/" className="logoLink">
                            WeatherOrNot
                        </Typography>
                    </div>

                    <nav className="navLinks">
                        <IconButton to="/search" color="inherit" className="iconButton">
                            <SearchIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                        <IconButton to="/favorites" color="inherit" className="iconButton">
                            <FavoriteIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                        <IconButton to="/login" color="inherit" className="iconButton">
                            <AccountCircleIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </nav>
                </header>
                <div>
                    <Route exact path="/" component={MainComponent} />
                    <Route path="/otherpage" component={OtherPage} />
                </div>
            </div>
        </Router>
    );
};

export default NavBar;
