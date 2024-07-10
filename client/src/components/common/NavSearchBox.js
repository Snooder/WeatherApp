import React from 'react';
import { TextField, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './NavBar.css'; // Assuming styles are here

const NavSearchBox = ({ destination, setDestination, handleTextFieldFocus, handleTextFieldBlur, handleSubmit, isTextFieldFocused }) => {
    return (
        <div className="searchBoxContainer">
            <TextField
                variant="outlined"
                placeholder="Search for any destination (Cities, Countries, Continents)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onFocus={handleTextFieldFocus}
                onBlur={handleTextFieldBlur}
                className="searchInput"
                sx={{
                    width: '80%',
                    maxWidth: '700px',
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
        </div>
    );
};

export default NavSearchBox;
