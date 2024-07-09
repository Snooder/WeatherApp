import React, { useState } from "react";
import './navBar.css';
import { Link } from "react-router-dom";
import { Typography, IconButton, Menu, MenuItem, Box, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchModal from './SearchModal';
import FavoritesModal from './FavoritesModal';
import axios from 'axios';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isFavoritesOpen, setFavoritesOpen] = useState(false);
    const [destination, setDestination] = useState('');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchOpen = () => setSearchOpen(true);
    const handleSearchClose = () => setSearchOpen(false);

    const handleFavoritesOpen = () => setFavoritesOpen(true);
    const handleFavoritesClose = () => setFavoritesOpen(false);

    const handleSubmit = async () => {
        try {
            await axios.post('/api/zipcodes', { zipCode: destination });
            setDestination('');
            alert('Destination submitted successfully');
        } catch (error) {
            console.error('Error submitting destination:', error);
            alert('Failed to submit destination');
        }
    };

    return (
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
                    <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>Home</MenuItem>
                    <MenuItem component={Link} to="/otherpage" onClick={handleMenuClose}>Other Page</MenuItem>
                </Menu>

                <div className="logo">
                    <IconButton component={Link} to="/" color="inherit" className="iconButton">
                        <HomeIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="h4" component={Link} to="/" className="logoLink">
                        WeatherOrNot
                    </Typography>
                </div>

                <Box flexGrow={2} display="flex" justifyContent="center" alignItems="center" mx={2}>
                    <TextField
                        variant="outlined"
                        placeholder="Select any destination (Cities, Countries, Continents)"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="searchInput"
                        sx={{
                            width: '80%', // Increased width to ensure placeholder is fully visible
                            maxWidth: '700px', // Adjusted max width
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
                                '&:hover': {
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 1)',
                                },
                                '&.Mui-focused': {
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 1)',
                                },
                                '& fieldset': {
                                    border: 'none',
                                },
                            },
                            '& .MuiOutlinedInput-input': {
                                borderRadius: '50px',
                                padding: '10px 15px',
                            }
                        }}
                    />
                    <IconButton
                        onClick={handleSubmit}
                        sx={{
                            marginLeft: '10px',
                            borderRadius: '50%',
                            padding: '10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
                            '&:hover': {
                                boxShadow: '0 0 10px rgba(255, 255, 255, 1)',
                                backgroundColor: 'rgba(255, 255, 255, 1)',
                            },
                            '&.Mui-focused': {
                                boxShadow: '0 0 10px rgba(255, 255, 255, 1)',
                            },
                        }}
                    >
                        <ArrowForwardIcon sx={{ color: 'black' }} />
                    </IconButton>
                </Box>

                <nav className="navLinks">
                    <IconButton component={Link} to="/calendar" color="inherit" className="iconButton">
                        <CalendarMonthIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton color="inherit" className="iconButton" onClick={handleSearchOpen}>
                        <SearchIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton color="inherit" className="iconButton" onClick={handleFavoritesOpen}>
                        <FavoriteIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton component={Link} to="/profile" color="inherit" className="iconButton">
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </nav>
            </header>
            <SearchModal open={isSearchOpen} onClose={handleSearchClose} />
            <FavoritesModal open={isFavoritesOpen} onClose={handleFavoritesClose} />
        </div>
    );
};

export default NavBar;
