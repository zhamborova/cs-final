let init = require("../data/users");
var express = require('express');
var router = express.Router();

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

module.exports = router;
