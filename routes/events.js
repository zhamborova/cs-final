let init = require("../data/events");

var express = require('express');
var router = express.Router();

var events = init.events
const eventService = require("../firebase/event-db")

/* GET event listings. */
router.get('/', function(req, res, next) {
    // res.send(JSON.stringify(events));
    eventService.getAllEvents()
        .then(events => {
            res.send(JSON.stringify(events))
            console.log(events)
        })
});

router.delete('/:id', function(req, res, next) {
    // let fil = events.filter(e => e.id !== parseInt(req.params.id))
    // events.length = 0;
    // events = [...fil];
    // res.send(`deleted event with id=${req.params.id}`);
    eventService.deleteEvent(req.params['id'])
        .then(deleted => res.send(`deleted event with id=${req.params.id}`))
})

router.post('/', function(req, res, next) {
    // events.push(req.body)
    // res.send(`added event with id=${req.body.id}`);
    eventService.createEvent(req.body)
        .then(events => res.send(JSON.stringify(events)))
})
module.exports = router;
