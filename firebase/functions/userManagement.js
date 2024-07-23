const admin = require("firebase-admin");
const {db} = require("../config/firebaseConfig");
const {User} = require("../models");

async function createUser(username, email) {
  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      displayName: username,
    });

    await db.collection("users").doc(userRecord.uid).set({
      username: username,
      email: email,
      created_at: new Date().toISOString(),
      lists: [],
      likes: [],
      friends: [],
    });

    await User.create({
      id: userRecord.uid,
      username: username,
      email: email,
      created_at: new Date().toISOString(),
    });

    return userRecord;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

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
