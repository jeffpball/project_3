const axios = require("axios");
const key = process.env.REACT_APP_StubHubKey;
const config = {
    headers:{
        Authorization: key,
        //Authorization: "Bearer etZJVJsu1azZUAPxGiDsn0fdwBHr",
        Accept: "application/json"
    }
}
class StubHubAPI {
    constructor() {
    }
    getEvent(artist, city){
        axios.get(`https://api.stubhub.com/sellers/search/events/v3?performerName=${artist}&city=${city}`, config)
            .then(function(response){
                
                const events = response.data.events;
                let eventsReal = [];
                for(let i = 0; i < events.length; i++){
                    if (events[i].name.includes("PARKING") || events[i].name.includes("VIP")){
                    } else {
                        eventsReal.push(events[i]);
                    }
                }
                let eventInfo  = {};
                eventInfo.eventLowPrice = eventsReal[0].ticketInfo.minListPrice;
                eventInfo.eventHighPrice = eventsReal[0].ticketInfo.maxListPrice;
                eventInfo.venue = eventsReal[0].venue.name;
                eventInfo.url = eventsReal[0].webURI;
                console.log("in response" , eventInfo);
                return (eventInfo);
            })
            .catch ((err) => {
                console.log(err)
                return (err);
            })
    }
}

module.exports = StubHubAPI;

//UNIT TEST
// const testCity = "Tacoma";
// const testArtist = "Post Malone"
// StubHub = new StubHubAPI();
// StubHub.getEvent(testArtist, testCity);