// firebase setup

(function() {
    const firebase = require("firebase-admin");
    var serviceAccount = require("../web-dev-db-firebase-adminsdk-x91jw-42b9658cb1.json");
    var config = {
        apiKey: "AIzaSyCSLmHe0D9T6d-ms7JhYU7O2FM-LGztQuM",
        authDomain: "web-dev-db.firebaseapp.com",
        databaseURL: "https://web-dev-db.firebaseio.com",
        projectId: "web-dev-db",
        storageBucket: "web-dev-db.appspot.com",
        messagingSenderId: "795302758366",
        appId: "1:795302758366:web:75350a7da03574f1fcff4f",
        measurementId: "G-SZQL25KFY4",
        credential: firebase.credential.cert(serviceAccount),
    };
    firebase.initializeApp(config)

    var db = firebase.database();
    var users = db.ref().child('users');
    users.on('value', snap => console.log(snap.val()));
}());
