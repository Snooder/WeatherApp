import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, IconButton } from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';
import './AuthComponent.css';

const AuthComponent = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Handle sign up logic here
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Proceed with sign-up
    };

    const handleSignIn = () => {
        // Handle sign in logic here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in logic here
    };

    return (
        <Container className="container">
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
                        style={{ display: isSignUp ? 'none' : 'block' }}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="button"
                    >
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={handleSignUp}
                        className="button"
                        style={{ display: isSignUp ? 'block' : 'none' }}
                    >
                        Confirm Sign Up
                    </Button>
                </div>
                <div className="google-button">
                    <IconButton onClick={handleGoogleSignIn}>
                        <GoogleIcon className="google-icon" />
                    </IconButton>
                </div>
            </Box>
        </Container>
    );
};

export default AuthComponent;
