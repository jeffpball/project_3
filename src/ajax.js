const axios = require("axios");
const Scraper = require("./scraper");
// import {Scraper} from "./scraper";
const scrapeSeatGeek = new Scraper;
const searchedFor = "Minneapolis, MN";

const querySeatGeek = (performerID) => {
    axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=3&client_id=MTIwNzV8MTM2NTQ1MDQyMg`)
        .then(function(response) {
            const events = response.data.events;
            for (event in events) {
                console.log("event = " + events[event].id);
                if (events[event].venue.display_location === searchedFor) {
                    console.log(events[event].id);
                } else {
                    console.log("Sorry not in there");
                }
            }
        });
}
// const querySeatGeek = (url) => {
//     axios.get(url)
//         .then(function(response) {
//             const events = response.data.events;
//             for (event in events) {
//                 console.log("event = " + events[event].id);
//                 if (events[event].venue.display_location === searchedFor) {
//                     let eventID = events[event].id;
//                     console.log(eventID);
//                     return eventID;
//                 } 
//             }
//         });
// }


async function getEventId(name) {
    const url = await scrapeSeatGeek.scrape(name);
    const eventId = await querySeatGeek(url);
    return eventId;
};

getEventId("tyler the creator");

// querySeatGeek();








