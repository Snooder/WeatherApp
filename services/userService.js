const {admin, db} = require("../config/firebaseConfig");
const {User} = require("../models");

// Create a new user
async function createUser(username, email) {
  try {
    const userRecord = await admin.auth().createUser({
      email,
      displayName: username,
    });

    await db.collection("users").doc(userRecord.uid).set({
      username,
      email,
      created_at: new Date().toISOString(),
      lists: [],
      likes: [],
      friends: [],
    });

    await User.create({
      id: userRecord.uid,
      username,
      email,
      created_at: new Date().toISOString(),
    });

    return userRecord;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

// Get user details
async function getUser(userId) {
  try {
    const userDoc = await db.collection("users").doc(userId).get();
    if (!userDoc.exists) {
      throw new Error("User not found");
    }
    return userDoc.data();
  } catch (error) {
    throw new Error(`Error fetching user data: ${error.message}`);
  }
}

// Add a friend to a user
async function addFriend(userId, friendId) {
  try {
    await db.collection("users").doc(userId).update({
      friends: admin.firestore.FieldValue.arrayUnion(friendId),
    });
  } catch (error) {
    throw new Error(`Error adding friend: ${error.message}`);
  }
}

module.exports = {
  createUser,
  getUser,
  addFriend,
};
