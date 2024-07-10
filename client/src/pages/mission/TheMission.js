// TheMission.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TheMission = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Our Mission
            </Typography>
            <Box mb={3}>
                <Typography variant="body1" paragraph>
                    🌍 <strong>Our Mission:</strong> Our platform is dedicated to not only providing valuable travel information but also to supporting global causes. We believe in the power of community and the impact we can have when we come together to help those in need.
                </Typography>
                <Typography variant="body1" paragraph>
                    ✈️ <strong>Use it for Travel:</strong> Feel free to use our platform to plan your next adventure. Discover new destinations, check weather patterns, and ensure your trips are safe and enjoyable.
                </Typography>
                <Typography variant="body1" paragraph>
                    🤝 <strong>Support Global Causes:</strong> As you explore the world, consider the ways you can make a difference. Whether it's through volunteering, donating, or simply raising awareness, your actions can have a significant impact on communities around the globe.
                </Typography>
                <Typography variant="body1" paragraph>
                    🌟 <strong>Show Your Support:</strong> If there are specific areas or causes you're passionate about, let us know! Your feedback helps us highlight the most important issues and direct support where it's needed most.
                </Typography>
                <Typography variant="body1" paragraph>
                    ❤️ <strong>Our Commitment:</strong> I run this platform on my own and am committed to making the world a better place. Your support is crucial to our mission.
                </Typography>
            </Box>
        </Container>
    );
};

export default TheMission;
