import React, { useEffect, useState } from 'react';
import './WeatherBackdrop.css';
import { Typography } from '@mui/material';

const WeatherBackdrop = () => {
    const [planes, setPlanes] = useState([]);
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        const createPlane = (direction) => ({
            id: Date.now() + Math.random(),
            top: Math.random() * 90,
            left: direction === 'left' ? window.innerWidth : -50,
            speed: Math.random() * (3 + 6), // Adjust speed between 8 and 14
            direction: direction
        });

        const createCloud = (direction) => ({
            id: Date.now() + Math.random(),
            top: Math.random() * 90,
            left: direction === 'left' ? window.innerWidth : -100,
            speed: Math.random() * (1.5 + 0.5), // Adjust speed between 0.5 and 2
            direction: direction
        });

        const addInitialPlanesAndClouds = () => {
            const initialPlanes = [];
            const initialClouds = [];
            for (let i = 0; i < 5; i++) {
                initialPlanes.push(createPlane(i % 2 === 0 ? 'right' : 'left'));
            }
            for (let i = 0; i < 5; i++) {
                initialClouds.push(createCloud(i % 2 === 0 ? 'right' : 'left'));
            }
            setPlanes(initialPlanes);
            setClouds(initialClouds);
        };

        addInitialPlanesAndClouds();
    }, []);

    useEffect(() => {
        const moveItems = (items, setItems, limitX, resetX) => {
            setItems(prevItems => prevItems.map(item => {
                let newLeft = item.left + (item.direction === 'left' ? -item.speed : item.speed);
                if (newLeft > limitX || newLeft < resetX) {
                    newLeft = item.direction === 'left' ? window.innerWidth : -100;
                    item.top = Math.random() * 90;
                }
                return { ...item, left: newLeft };
            }));
        };

        const interval = setInterval(() => {
            moveItems(planes, setPlanes, window.innerWidth, -50);
            moveItems(clouds, setClouds, window.innerWidth, -100);
        }, 50); // Increase the interval for smoother animation

        return () => clearInterval(interval);
    }, [planes, clouds]);

    return (
        <div className="weather-backdrop">
            {planes.map((plane) => (
                <div
                    key={plane.id}
                    className="plane"
                    style={{
                        top: `${plane.top}%`,
                        left: `${plane.left}px`,
                        transform: `rotate(${plane.direction === 'left' ? -135 : 45}deg) scale(0.2)`,
                        animationDuration: `${20 / plane.speed}s`
                    }}
                >
                    <Typography variant="h1" className="plane-emoji">✈️</Typography>
                </div>
            ))}
            {clouds.map((cloud, index) => (
                <div
                    key={cloud.id}
                    className={`cloud ${cloud.direction === 'left' ? 'cloud-left' : 'cloud-right'} cloud-${index}`}
                    style={{
                        top: `${cloud.top}%`,
                        left: `${cloud.left}px`,
                        animationDuration: `${40 / cloud.speed}s`
                    }}
                ></div>
            ))}
        </div>
    );
};

export default WeatherBackdrop;
