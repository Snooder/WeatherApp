const {admin} = require("../../config/firebaseConfig");

async function sendNotificationToUsers(userIds, title, body) {
  const tokens = await Promise.all(
      userIds.map(async (userId) => {
        const userDoc = await admin.firestore().collection("users").doc(userId).get();
        return userDoc.data().notificationToken;
      }),
  );

  const message = {
    notification: {
      title,
      body,
    },
    tokens,
  };

  await admin.messaging().sendMulticast(message);
}

module.exports = sendNotificationToUsers;
