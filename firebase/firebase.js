// firebase setup
const admin = require("firebase-admin");
var serviceAccount = require("../web-dev-db-fd424-firebase-adminsdk-8fz2l-cfb0ca8d4f");

admin.initializeApp({credential:admin.credential.cert(serviceAccount)})

const db = admin.firestore()

module.exports = {db}
