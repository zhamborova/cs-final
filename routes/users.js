let init = require("../data/users.js");
var express = require('express');
var router = express.Router();

const userService = require("../services/user-service")

var users = init.users

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
			res.send(JSON.stringify(user))
		} else {
			console.log("Pass didn't match")
			res.send(JSON.stringify({"firstName": "none"}))
		}

	} else {
		console.log("No such user was found")
		res.send(JSON.stringify({"firstName": "none"}))
	}
})

// find user by Id
router.get('/:userId', function(req, res) {
	const user = userService.findUserById(req.params['userId'])
	console.log('FINDING USER BY ID')
	return res.send(user)
});

module.exports = router;
