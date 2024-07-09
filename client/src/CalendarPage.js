import React, { useState } from 'react';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Typography, Badge } from '@mui/material';
import { styled } from '@mui/system';
import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';

// Sample weather data for demonstration
const weatherData = {
    '2024-07-01': 'sunny',
    '2024-07-02': 'rainy',
    '2024-07-03': 'cloudy',
    '2024-07-04': 'sunny',
    '2024-07-05': 'rainy',
    // Add more dates and weather statuses
};

const weatherColors = {
    sunny: 'yellow',
    rainy: 'blue',
    cloudy: 'gray',
};

const CustomBadge = styled(Badge)(({ theme, color }) => ({
    '& .MuiBadge-dot': {
        height: 8,
        minWidth: 8,
        borderRadius: '50%',
        backgroundColor: color,
    },
}));

const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Generate a list of all days in the current month
    const daysInMonth = eachDayOfInterval({
        start: startOfMonth(selectedDate),
        end: endOfMonth(selectedDate),
    });

    const renderDay = (day, selectedDate, isInCurrentMonth, dayComponent) => {
        const formattedDate = day.toISOString().split('T')[0];
        const weather = weatherData[formattedDate];

        return (
            <CustomBadge
                key={day.toString()}
                color={weather ? weatherColors[weather] : 'transparent'}
                overlap="circular"
                badgeContent=" "
            >
                {dayComponent}
            </CustomBadge>
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Typography variant="h4" align="center" gutterBottom>
                Monthly Weather Calendar
            </Typography>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
                renderDay={renderDay}
            />
        </LocalizationProvider>
    );
};

export default CalendarPage;
