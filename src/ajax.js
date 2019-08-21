const axios = require("axios");
const eventArray = [];
axios.get("https://api.seatgeek.com/2/events?performers.id=13719&per_page=3&client_id=MTIwNzV8MTM2NTQ1MDQyMg").then(function(response) {
    const events = response.data.events;
    for (event in events) {
        let eventDict = {};
        eventDict.venue = events[event].venue.display_location;
        eventDict.eventId = events[event].id;
        eventArray.push(eventDict);
    }
    console.log(eventArray);
});

