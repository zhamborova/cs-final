firebase = require('./firebase')
var db = firebase.db

const getAllEvents = () =>
    db.collection('events').get().then(snapshot=>
        snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))


const deleteEvent = (eventId) => {
    db.collection("events").doc(eventId).delete().then(function() {
        console.log("Document successfully deleted!");
        return "successfully deleted"
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
const createEvent = async (event) => {
   return db.collection("events").add({...event})
        .then(function(docRef) {
            let event = getEventById(docRef.id).then(e => e)
            return event
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

const updateEvent = async (eventId, event) => {
   return db.collection('events').doc(eventId).update({...event})
        .then(function () {
            let event = getEventById(eventId).then(e => e)
           return event;
        }).catch(function (error) {
        console.error("Error updating document: ", error);
    });
}

const getEventById = (eventId) => {
    return db.collection('events').doc(eventId)
        .get().then(function(doc) {
            if (doc.exists) {
                return {...doc.data(), id:eventId}
            } else {
                console.log("No such document!");
            }
        })}


const getEventsForUser = async (userId) => {
    let arr = await  db.collection("events")
        .where("participants", "array-contains", userId).get()
        .then(snapshot => snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))


    return arr;
}





module.exports = {
    getAllEvents, deleteEvent,
    updateEvent, createEvent,
    getEventById, getEventsForUser
}
