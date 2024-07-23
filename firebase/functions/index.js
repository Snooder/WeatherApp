const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
// const {admin, db} = require("../config/firebaseConfig");
// const fetchWeatherFromAPI = require("./fetchWeatherData");
const sendNotificationToUsers = require("./notifications");
const {getWeatherData} = require("../services/weatherService");
const {createUser, getUser} = require("../services/userService");

// Example HTTP function to fetch weather data for a location
exports.getWeather = onRequest(async (req, res) => {
  const location = req.query.location;
  if (!location) {
    res.status(400).send("Location is required");
    return;
  }

  try {
    const weatherData = await getWeatherData(location);
    res.status(200).json(weatherData);
  } catch (error) {
    logger.error("Error fetching weather data:", error);
    res.status(500).send("Error fetching weather data");
  }
});

// Example Firestore function to send a notification when a user document is updated
exports.notifyUserUpdate = onDocumentWritten("users/{userId}", async (event) => {
  const userId = event.params.userId;
  const newValue = event.data.after.data();
  const previousValue = event.data.before.data();

  // Check if specific fields were updated and send a notification if needed
  if (newValue.someField !== previousValue.someField) {
    const notificationTitle = "User Updated";
    const notificationBody = `User ${userId} updated their profile.`;
    await sendNotificationToUsers([userId], notificationTitle, notificationBody);
  }
});

// Example HTTP function to add a user
exports.addUser = onRequest(async (req, res) => {
  const {username, email} = req.body;
  if (!username || !email) {
    res.status(400).send("Username and email are required");
    return;
  }

  try {
    const userRecord = await createUser(username, email);
    res.status(201).send(userRecord);
  } catch (error) {
    logger.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

// Example HTTP function to get a user
exports.getUser = onRequest(async (req, res) => {
  const userId = req.query.userId;
  if (!userId) {
    res.status(400).send("User ID is required");
    return;
  }

  try {
    const user = await getUser(userId);
    res.status(200).json(user);
  } catch (error) {
    logger.error("Error fetching user data:", error);
    res.status(500).send("Error fetching user data");
  }
});
