var express = require('express');
var router = express.Router();



const findUserById = (req, res) => {
    res.send(userService.findUserById(req.params['userId']))
}

const findAllUsers = (req, res) => {
    res.send(userService.findAllUsers(res))
}

// router.get('/users/:userId', findUserById);
// router.get('/users', findAllUsers);


// find all users
router.get('/', function(req, res) {
    console.log('FINDING ALL USERS')
    res.send(userService.findAllUsers())
});


module.exports = router;
