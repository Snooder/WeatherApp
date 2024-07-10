import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './NavBar.css';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavIconButton from './NavIconButton';
import SearchModal from '../modals/SearchModal';
import FavoritesModal from '../modals/FavoritesModal';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isFavoritesOpen, setFavoritesOpen] = useState(false);
    const [destination, setDestination] = useState('');
    const [isTextFieldFocused, setIsTextFieldFocused] = useState(false);

    const location = useLocation();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSearchOpen = () => setSearchOpen(true);
    const handleSearchClose = () => setSearchOpen(false);

    const handleFavoritesOpen = () => setFavoritesOpen(true);
    const handleFavoritesClose = () => setFavoritesClose(false);

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

    const handleTextFieldFocus = () => {
        setIsTextFieldFocused(true);
    };

    const handleTextFieldBlur = () => {
        if (!destination) {
            setIsTextFieldFocused(false);
        }
    };

    return (
        <div>
            <header className="NavBar">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    className={`iconButton navButton ${anchorEl ? 'active' : ''}`}
                    style={{ marginLeft: '10px', marginRight: '10px' }}
                >
                    <MenuIcon sx={{ fontSize: 40, color: 'white' }} />
                </IconButton>
                <NavMenu anchorEl={anchorEl} handleMenuClose={handleMenuClose} />

                <div className="logoContainer">
                    <img src={`${process.env.PUBLIC_URL}/rainbow.png`} alt="Rainbow" className="rainbowImage" />
                    <NavLogo />
                </div>

                <Box display="flex" justifyContent="center" alignItems="center" className="searchBarContainer">
                    <TextField
                        variant="outlined"
                        placeholder="Search for any destination (Cities, Countries, Continents)"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        onFocus={handleTextFieldFocus}
                        onBlur={handleTextFieldBlur}
                        className="searchInput"
                        sx={{
                            flexGrow: 1,
                            width: '100%', // Adjust width to take 100% of the available space
                            maxWidth: 'none',
                            marginLeft: '10px', // Adding margin to the left
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
                        className={`submit-button ${isTextFieldFocused ? 'glowing' : ''}`}
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

                <NavIconButton handleSearchOpen={handleSearchOpen} handleFavoritesOpen={handleFavoritesOpen} location={location} />
            </header>
            <SearchModal open={isSearchOpen} onClose={handleSearchClose} />
            <FavoritesModal open={isFavoritesOpen} onClose={handleFavoritesClose} />
        </div>
    );
};

export default NavBar;
