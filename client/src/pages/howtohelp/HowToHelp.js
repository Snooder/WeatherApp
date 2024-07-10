import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import './HowToHelp.css'; // Make sure to create this CSS file

const glowColorClasses = ['glow-color-1', 'glow-color-2', 'glow-color-3', 'glow-color-4', 'glow-color-5'];

const getRandomGlowClass = () => {
    return glowColorClasses[Math.floor(Math.random() * glowColorClasses.length)];
};

const HowToHelp = () => {
    return (
        <Container className="howToHelpContainer">
            <Typography variant="h2" gutterBottom align="center">
                How to Help
            </Typography>
            <Grid container spacing={3} className="helpGrid">
                <Grid item xs={12} sm={6} className="helpColumn">
                    <Box className="helpSection leftAlign">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography variant="h1" className={`emoji spin ${getRandomGlowClass()}`}>🌐</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" paragraph className="helpText">
                                    <strong>Share Our Platform:</strong><br />
                                    Help us spread the word about our platform. Share it with your friends, family, and on social media to raise awareness about the causes we support.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className="helpColumn">
                    <Box className="helpSection rightAlign">
                        <Grid container spacing={2} direction="row-reverse" alignItems="center">
                            <Grid item>
                                <Typography variant="h1" className={`emoji spin-y-axis ${getRandomGlowClass()}`}>📢</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" paragraph className="helpText">
                                    <strong>Raise Awareness:</strong><br />
                                    Use our platform to learn about global issues and share this information with your network. Raising awareness is the first step to making a difference.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className="helpColumn">
                    <Box className="helpSection leftAlign">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography variant="h1" className={`emoji spin-y-axis ${getRandomGlowClass()}`}>✈️</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" paragraph className="helpText">
                                    <strong>Plan Your Trips:</strong><br />
                                    Use our platform to find the best travel destinations. Get insights on the weather and local conditions to make the most of your travels. Explore and enjoy responsibly.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className="helpColumn">
                    <Box className="helpSection rightAlign">
                        <Grid container spacing={2} direction="row-reverse" alignItems="center">
                            <Grid item>
                                <Typography variant="h1" className={`emoji spin-reverse ${getRandomGlowClass()}`}>💰</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" paragraph className="helpText">
                                    <strong>Support Financially:</strong><br />
                                    Consider donating to our platform. Your financial support helps us maintain and improve our services, and continue making a positive impact around the world.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} className="helpColumn">
                    <Box className="helpSection leftAlign">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography variant="h1" className={`emoji spin ${getRandomGlowClass()}`}>🙏</Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="h5" paragraph className="helpText">
                                    <strong>Get Involved:</strong><br />
                                    Follow us on social media and share our posts to help spread the word. Every bit of support helps!
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HowToHelp;
