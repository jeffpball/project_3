const axios = require("axios");
const key = process.env.REACT_APP_StubHubKey;
const config = {
    headers:{
        Authorization: "Bearer etZJVJsu1azZUAPxGiDsn0fdwBHr",
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
                console.log("in response" , eventsReal);
                return (eventsReal);
            })
            .catch ((err) => {
                console.log(err)
                return (err);
            })
    }
}

//UNIT TEST
const testCity = "Tacoma";
const testArtist = "Post Malone"
StubHub = new StubHubAPI();
StubHub.getEvent(testArtist, testCity);