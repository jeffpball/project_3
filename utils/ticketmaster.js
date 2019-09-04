const axios = require("axios");
const key = process.env.REACT_APP_TicketMasterKey;
class TicketMasterAPI {
    constructor() {
    }
    getEvent(artist, city, key){
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${key}&city=${city}&keyword=${artist}`)
            .then(function(response){
                console.log("in response" , response.data);
                const events = response.data.events;
                return (events);
            })
            .catch ((err) => {
                console.log(err)
                return (err);
            })
    }
}

// UNIT TEST
// const testArtist = "Post Malone";
// const testCity = "Tacoma"
// TicketMaster = new TicketMasterAPI;
// TicketMaster.getEvent(testArtist, testCity, key);
