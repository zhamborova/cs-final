let init = require("../data/users.js");
let userList = require("../data/userList.js")
var express = require('express');
var router = express.Router();

// const userService = require('../services/user-service')
var user_list = userList.user_list
var users = init.users

// testing communication with the database
const userService = require("../firebase/user-db")



/* GET users. */
router.get('/', function(req, res) {
	userService.getAllUsers()
		.then(usersList => {
			res.send(JSON.stringify(usersList));
		})
});

// Register User and send back all of the users
router.post('/', function(req, res) {
	userService.createUser(req.body)
		.then(user => {
			res.send(JSON.stringify(user));
		})
})

// Login User

router.post('/login', function(req, res) {
	let {email, password} = req.body
    userService.authenticate(email, password).then(response=>
	res.send(JSON.stringify(response)))
})

// find user by Id
router.get('/:userId', function(req, res) {
	userService.getUserById(req.params['userId'])
		.then(user => {
			res.send(JSON.stringify(user))
		})
});

// update user
router.put('/:userId', function(req, res) {
   userService.updateUser(req.params['userId'], req.body)
		.then(user => {
			res.send(JSON.stringify(user))
		}).catch(err => console.log(err))
});



router.delete("/:userId", function(req, res) {
	userService.deleteUser(req.params['userId'])
     res.send(`deleted user with id: ${req.params['userId']}`)
});
module.exports = router;
