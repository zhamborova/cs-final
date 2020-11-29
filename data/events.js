const participantsList = [123,234, 345, 456, 567];


const event = {
    host_id: 234,
    id: 1,
    title: "Lake Baikal cleanup",
    host_name: "Bryan Young",
    host_img: 'host_img',
    image: 'event_img',
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing: false,
}

const event2 = {
    host_id: 123,
    id: 2,
    title: "Trash Hellhole",
    host_name: "Bryan Young",
    host_img: 'host_img',
    image: 'event_img',
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing:false,
}


const event3 = {
    host_id: 123,
    id: 3,
    title: "Miserville",
    host_name: "Bryan Young",
    host_img: 'host_img',
    image: 'event_img',
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing:false,
}

const event4 = {
    host_id: 123,
    id: 4,
    title: "The valley of the dead",
    host_name: "Bryan Young",
    host_img: 'host_img',
    image: 'event_img',
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing:false,
}

const event5 = {
    host_id: 123,
    id: 5,
    title: "Depression lake",
    host_name: "Bryan Young",
    host_img: 'host_img',
    image: 'event_img',
    date: new Date().toDateString(),
    time_start: "10:00",
    time_end:"12:00",
    location: {city:"Boston", street: "48 Calumet St", zip: "02215", country: "USA"},
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
        " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
        "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
        "in voluptate velit esse cillum dolore eu fugiat nulla.",
    tags: ["hashtag1", "hashtag2", "community-service",],
    participants: participantsList,
    editing:false,
}

let events = [event, event2, event3, event4, event5]

module.exports = { events}
