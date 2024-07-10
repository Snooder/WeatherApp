import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavLogo = () => {
    return (
        <div className="logo">
            <Typography variant="h4" component={Link} to="/" className="logoLink">
                WeatherOrNot
            </Typography>
        </div>
    );
};

export default NavLogo;
