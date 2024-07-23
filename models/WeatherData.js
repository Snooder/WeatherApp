module.exports = (sequelize, DataTypes) => {
    const WeatherData = sequelize.define('WeatherData', {
        location: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        precipitation_probability: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fetched_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });

    return WeatherData;
};
