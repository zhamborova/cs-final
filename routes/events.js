let init = require("../data/events");

var express = require('express');
var router = express.Router();

var events = init.events

/* GET event listings. */
router.get('/', function(req, res, next) {
    res.send(JSON.stringify(events));
});

router.delete('/:id', function(req, res, next) {
    let fil = events.filter(e => e.id !== parseInt(req.params.id))
    events.length = 0;
    events = [...fil];
    res.send(`deleted event with id=${req.params.id}`);
})

router.post('/', function(req, res, next) {
    events.push(req.body)
    res.send(`added event with id=${req.body.id}`);
})
module.exports = router;
