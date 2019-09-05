const axios = require("axios");
<<<<<<< HEAD
// const key = process.env.REACT_APP_TicketMasterKey;

const key = "wotjY8jrJPSsHhtUmS3Gi1ySKBQdsG2E";

=======
const key = process.env.REACT_APP_TicketMasterKey;
//const key = "wotjY8jrJPSsHhtUmS3Gi1ySKBQdsG2E";
>>>>>>> master
class TicketMasterAPI {
    constructor() {
    }
    getEvent(artist, city, key){
<<<<<<< HEAD
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=wotjY8jrJPSsHhtUmS3Gi1ySKBQdsG2E&city=${city}&keyword=${artist}`)
=======
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${key}&city=${city}&keyword=${artist}`)
>>>>>>> master
            .then(function(response){
                const events = response.data;
                let eventInfo  = {};
                eventInfo.eventLowPrice = events._embedded.events[0].priceRanges[0].min;
                eventInfo.eventHighPrice = events._embedded.events[0].priceRanges[0].max;
                eventInfo.venue = events._embedded.events[0]._embedded.venues[0].name;
                eventInfo.url = events._embedded.events[0].url;
                console.log("in response" , eventInfo);
                return (events);
            })
            .catch ((err) => {
                console.log(err)
                return (err);
            })
    }
}

module.exports = TicketMasterAPI;

//UNIT TEST
// const testArtist = "Post Malone";
// const testCity = "Tacoma"
// TicketMaster = new TicketMasterAPI;
// TicketMaster.getEvent(testArtist, testCity, key);
