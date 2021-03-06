const axios = require("axios");
const numeral = require('numeral');

module.exports = {
  findAll: function(req, res) {
    // console.log(req.body);
    var city = req.body.city;
    var artist = req.body.name;
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=wotjY8jrJPSsHhtUmS3Gi1ySKBQdsG2E&city=${city}&keyword=${artist}`)

    .then(function(response){
        const events = response.data;
        console.log(response.data);
        let eventInfo  = {};
        eventInfo.eventLowPrice = numeral(events._embedded.events[0].priceRanges[0].min).format('$0,0.00');
        eventInfo.eventHighPrice = numeral(events._embedded.events[0].priceRanges[0].max).format('$0,0.00');
        eventInfo.venue = events._embedded.events[0]._embedded.venues[0].name;
        eventInfo.url = events._embedded.events[0].url;
        eventInfo.date = events._embedded.events[0].dates.start.localDate;
        eventInfo.image = events._embedded.events[0].images[1].url;
        eventInfo.name = events._embedded.events[0].name;
        console.log("ticketmaster response" , eventInfo);
        res.json(eventInfo);
    })
    .catch(err => res.status(422).json(err));
  }
};