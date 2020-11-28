var express = require('express');
var router = express.Router();


const userService = require("../services/user-service")

const findUserById = (req, res) => {
    res.send(userService.findUserById(req.params['userId']))
}

const findAllUsers = (req, res) => {
    res.send(userService.findAllUsers(res))
}

// router.get('/users/:userId', findUserById);
// router.get('/users', findAllUsers);

// find user by Id
router.get('/:userId', function(req, res) {
    const user = userService.findUserById(req.params['userId'])
    console.log('FINDING USER BY ID')
    return res.send(user)
});

// find all users
router.get('/', function(req, res) {
    console.log('FINDING ALL USERS')
    res.send(userService.findAllUsers())
});


module.exports = router;
