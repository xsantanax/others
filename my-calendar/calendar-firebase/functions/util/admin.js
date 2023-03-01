const admin = require("firebase-admin");
const serviceAccount = require("./service-account-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-calendar.firebaseio.com",
});

const db = admin.firestore();
module.exports = { admin, serviceAccount, db };
