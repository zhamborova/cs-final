let init = require("../data/users.js");
let userList = require("../data/userList.js")
var express = require('express');
var router = express.Router();

const userService = require('../services/user-service')
var user_list = userList.user_list
var users = init.users

// testing communication with the database
// const userService = require("../firebase/user-db")
// userService.createUserWithId("890", {first_name: 'Michelle2'})
// console.log("getting by id")
// userService.getUserById(890)

/* GET users. */
router.get('/', function(req, res) {
	res.send(JSON.stringify(users));
});

// Register User and send back all of the users
router.post('/', function(req, res) {
	users.push(req.body)
	res.send(JSON.stringify(users));
	console.log("Here is the updated list of users:")
	console.log(users)
})

// Login User
router.post('/login', function(req, res) {
	//Verify user and send back that user as JSON
	if (users.filter(user => user.email === req.body.email).length !== 0) {
		console.log("User was found.")

		if (users.filter(user => user.email === req.body.email)[0].password === req.body.password) {
			console.log("Success.")
			let user = users.filter(user => user.email === req.body.email)[0]
			user["loginStatus"] = "success"
			res.send(JSON.stringify(user))
			console.log("Here is the sent user: " + user)
		} else {
			console.log("Pass didn't match")
			res.send(JSON.stringify({"firstName": "none", "loginStatus": "unsuccessful"}))
		}

	} else {
		console.log("No such user was found")
		res.send(JSON.stringify({"firstName": "none", "loginStatus": "unsuccessful"}))
	}
})

// find user by Id
router.get('/:userId', function(req, res) {
	// const user = userService.findUserById(req.params['userId'])
	// console.log('FINDING USER BY ID')
	// return res.send(user)
	res.send(user_list.find(user => req.body.id === user.id))
});

// find all users
router.get('/all', function(req, res) {
	// console.log('FINDING ALL USERS')
	// const users = userService.findAllUsers()
	// res.send(users)
	res.send(user_list)
});

// update user
router.put('/:userId', function(req, res) {

	res.send(user_list.filter(user => user.id === req.body.id? req.body : user))
});

module.exports = router;
