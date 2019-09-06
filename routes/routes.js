const router = require("express").Router();
const SeatGeekAPI = require("../utils/SeatGeekAPI");
const seatGeekAPI = new SeatGeekAPI();
const TicketMasterAPI = require("../utils/ticketmaster");
const ticketMasterAPI = new TicketMasterAPI();
const StubHubAPI = require("../utils/stubhub");
const stubHubAPI = new StubHubAPI();

const ticketmasterController = require("../controllers/ticketmasterController");

router.post("/ticketmaster/search", ticketmasterController.findAll);

router.post("/seatgeek/search", function(req, res) {
    seatGeekAPI.getPrices(req.body.name, req.body.city).then(function(response){
        res.json(response);
    }).catch(function(err){
        console.log(err);
    })
});

// //Gavin, here are some boiler plate routes for the ticketmaster and stubhub API calls
// router.post("/ticketmaster/search", function(req, res) {
//     console.log(req.body);
//     ticketMasterAPI.getEvent(req.body.name, req.body.city).then(function(response){
//         res.json(response);
//     }).catch(function(err){
//         console.log(err);
//     })
// });

router.post("/stubhub/search", function(req, res) {
    stubHubAPI.getEvent(req.body.name, req.body.city).then(function(response){
        res.json(response);
    }).catch(function(err){
        console.log(err);
    })
});

module.exports = router;
