// const users = require('../data/users.json')

// const admin = require("firebase-admin");
// var serviceAccount = require("../web-dev-db-firebase-adminsdk-x91jw-42b9658cb1.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://web-dev-db.firebaseio.com",
//     authDomain: "web-dev-db.firebaseapp.com",
// });
// var db = admin.database();
// var users = db.ref("users");
// console.log(users)

// const findUserById = (userId) => {
const findUserById = (obj, res) => {
    // console.log(userId)
    // return users.find(user => user.id === userId)
    var oneUser=users.child(obj.id);
    oneUser.once('value',function(snap){
        res.status(200).json({"user":snap.val()});
    })
}

const findAllUsers = (res) =>
    // users
    users.once('value',function(snap){
        res.status(200).json({"users":snap.val()});
    })

module.exports = {
    findUserById: findUserById,
    findAllUsers: findAllUsers
}
