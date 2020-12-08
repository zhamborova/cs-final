firebase = require('./firebase')
var db = firebase.db


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
