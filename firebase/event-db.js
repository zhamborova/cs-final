firebase = require('./firebase')
var db = firebase.db

const getAllEvents = () =>
    db.ref('events').once('value')
        .then(snapshot => snapshot.val())


const deleteEvent = (eventId) =>
    db.ref('events').child(eventId).set(null)


const createEvent = (event) => {
    db.ref('events').push(event)
    return db.ref('events').once('value')
        .then(snapshot => snapshot.val())
}

module.exports = {
    getAllEvents: getAllEvents,
    deleteEvent: deleteEvent,
    createEvent: createEvent
}
