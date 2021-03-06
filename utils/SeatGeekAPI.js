const axios = require("axios");
const Scraper = require("./scraper");
const numeral = require('numeral');
// import {Scraper} from "./scraper";
const searchedFor = "San Francisco, CA";

class SeatGeekAPI extends Scraper {
    constructor() {
        super();
    }
    async getEvents( name ) {
        const performerID = await this.scrape(name);
        axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=100&client_id=MTIwNzV8MTM2NTQ1MDQyMg`)
        .then(function(response) {
            const events = response.data.events;
            const listOfCities = [];
            for (let event in events) {
                let cityInfo = {};
                cityInfo.city = events[event].venue.display_location;
                cityInfo.eventId = events[event].id;
                listOfCities.push(cityInfo);
            }
            console.log(listOfCities);
            return listOfCities;
        })
    }
    //don't use this one. just a sample of the original non asynchronous function
    getEventId (performerID) {
        axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=3&client_id=MTIwNzV8MTM2NTQ1MDQyMg`)
            .then(function(response) {
                const events = response.data.events;
                for (let event in events) {
                    let eventId = events[event].id;
                    let eventVenue = events[event].venue.display_location;
                    console.log("event = " + eventId);
                    if (eventVenue === searchedFor) {
                        console.log(eventId);
                        return eventId;
                    } else {
                        console.log("Sorry not in there");
                    }
                }
            });
    }
    async asyncGetEventId (name) {
        const performerID = await this.scrape(name);
        axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=1000&client_id=MTIwNzV8MTM2NTQ1MDQyMg`)
        .then(function(response) {
            const events = response.data.events;
            for (let event in events) {
                let eventLowPrice = events[event].stats.lowest_sg_base_price_good_deals;
                let eventId = events[event].id;
                let eventVenue = events[event].venue.display_location;
                if (eventVenue === searchedFor) {
                    console.log(eventLowPrice);
                    console.log(eventId);
                    return eventLowPrice;
                } 
            }
        }).catch ((err) => {
            return (err);
        })
    }
    async asyncGetEventIdA (name) {
        const performerID = await this.scrape(name);
        const response = await axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=1000&client_id=MTIwNzV8MTM2NTQ1MDQyMg`);
        const events = await response.data.events;
        for (let event in events) {
            let eventLowPrice = events[event].stats.lowest_sg_base_price_good_deals;
            let eventId = events[event].id;
            let eventVenue = events[event].venue.display_location;
            if (eventVenue === searchedFor) {
                return eventLowPrice;
            } 
        }
    }
    async getPrices(name, city) {
        const performerID = await this.scrape(name);
        const response = await axios.get(`https://api.seatgeek.com/2/events?performers.id=${performerID}&per_page=1000&client_id=MTIwNzV8MTM2NTQ1MDQyMg`);
        const events = await response.data.events;
        for (let event in events) {
            let eventPrices = {};
            eventPrices.eventLowPrice = numeral(events[event].stats.lowest_sg_base_price_good_deals).format('$0,0.00');
            eventPrices.eventAveragePrice = events[event].stats.average_price;
            eventPrices.eventHighPrice = numeral(events[event].stats.highest_price).format('$0,0.00');
            eventPrices.url = events[event].url;
            let eventVenue = events[event].venue.city;
            if (eventVenue === city) return eventPrices;
        }
    }
}


seatGeek = new SeatGeekAPI();

// seatGeek.getEventId(13719);
// seatGeek.asyncGetEventId("tyler the creator");
// seatGeek.getEvents("tyler the creator");
// seatGeek.getLowPrice("tyler the creator");

seatGeek.asyncGetEventIdA("tyler the creator").then(result => console.log(result));


// seatGeek.scrape("post malone").then((perfID) => 
//     console.log("x is " + perfID)
// );
module.exports = SeatGeekAPI;

