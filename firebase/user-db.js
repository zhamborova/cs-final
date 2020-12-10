firebase = require('./firebase')
const db = firebase.db


const getAllUsers = () =>
    db.collection('users').get().then(snapshot=>
        snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))


const createUser = async (user) => {
   return db.collection("users").add({...user})
        .then(function(docRef) {
            let user = getUserById(docRef.id).then(user => user)
            return user
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}


const updateUser = (userId, user) =>
   db.collection('users').doc(userId).update({...user}).then(function() {
      console.log("Document successfully updated!",);
      return getUserById(userId)
    }).catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });



const deleteUser = (userId) => {
    db.collection("users").doc(userId).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}



const getUserById = (userId) => {
    return db.collection('users').doc(userId).get()
        .then(function(doc) {
            if (doc.exists) {
                return {...doc.data(), id:userId}
            } else {
                console.log("No such document!");
            }
})}




const authenticate = (email, password) =>
       db.collection("users").where("email", "==", email)
           .where("password","==", password).get()
           .then(snapshot=> ({...snapshot.docs[0].data(), id:snapshot.docs[0].id}))
           .catch(err => {message:"no user found"})



module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    authenticate,

}
