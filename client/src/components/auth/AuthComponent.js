import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import './AuthComponent.css';

const AuthComponent = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
    };

    const handleSignIn = () => { };

    const handleGoogleSignIn = () => { };

    return (
        <Container className="auth-container">
            <Typography variant="h5" align="center" gutterBottom>
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </Typography>
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        className: 'input-outline',
                        style: { color: 'black' },
                    }}
                    InputLabelProps={{
                        style: { color: 'black' },
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        className: 'input-outline',
                        style: { color: 'black' },
                    }}
                    InputLabelProps={{
                        style: { color: 'black' },
                    }}
                />
                {isSignUp && (
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        InputProps={{
                            className: 'input-outline',
                            style: { color: 'black' },
                        }}
                        InputLabelProps={{
                            style: { color: 'black' },
                        }}
                    />
                )}
                <div className="button-container">
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={handleSignIn}
                        className="button"
                        style={{ display: isSignUp ? 'none' : 'block', margin: '10px' }}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="button"
                        style={{ margin: '10px' }}
                    >
                        {isSignUp ? 'Back to Sign In' : 'Sign Up'}
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={handleSignUp}
                        className="button"
                        style={{ display: isSignUp ? 'block' : 'none', margin: '10px' }}
                    >
                        Confirm Sign Up
                    </Button>
                </div>
                <div className="google-button" style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" style={{ marginRight: '10px', color: 'black', fontSize: '1.25rem' }}>
                        Sign in with:
                    </Typography>
                    <IconButton
                        onClick={handleGoogleSignIn}
                        sx={{
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
                        <GoogleIcon sx={{ fontSize: 30, color: 'black' }} />
                    </IconButton>
                </div>
            </Box>
        </Container>
    );
};

export default AuthComponent;
