
const user1 = {
	id: "9999",
	firstName: "Gleb",
	lastName: "B",
	email: "random@mail.com",
	password: "qwerty",
	bio: "Backend Bio",
	location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
	friends: [345, 234, 456,567,678],
	events: [1,2,3,4,5]
}

const user2 = {
	id: "9998",
	firstName: "Gleb 2",
	lastName: "B 2",
	email: "random@mail.com2",
	password: "qwerty2",
	bio: "Backend Bio2",
	location: {city:"Boston2", street: "48 Calumet St", zip: "02215", country: "USA"},
	friends: [345],
	events: [1]
}

let users = [user1, user2]

module.exports = {users}
