// firebase setup
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
var users = []

const updateList = (db) => {
    users = db
}

const getAllUsers = () =>
    db.ref('users').once('value')
        .then(snapshot => snapshot.val())
    // db.ref('users').on('value', snapshot => snapshot.val())


const createUser = (user) => {
    // adds new user to list of users
    db.ref('users').push(user)
    // returns the NEW list of users
    return db.ref('users').once('value')
        .then(snapshot => snapshot.val())
}

const createUserWithId = (id, user) => {
    return db.ref('users').child(id).set(user)
        .then(user => user)
}

const updateUser = (userId, user) => {
    // return db.ref('users' + userId).set({user})
    db.ref('users/').child(userId).set(user)
        .then(user => user)
    // return db.ref('users').child(userId).once('value')
    //     .then(snapshot => snapshot.val())
}

const deleteUser = (userId) => {
    return db.ref('users').child(userId).set(null)
}

const getUserById = (userId) => {
    return db.ref('users').child(userId).once('value')
        .then(snapshot => snapshot.val())
    // return db.ref('/users/' + userId).on('value', snapshot => snapshot.val())
}



module.exports = {
    getAllUsers: getAllUsers,
    createUser: createUser,
    createUserWithId: createUserWithId,
    updateUser: updateUser,
    deleteUser: deleteUser,
    getUserById: getUserById
}
