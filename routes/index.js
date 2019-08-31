const path = require("path");
const router = require("express").Router();
const routes = require("./routes");
// const seatGeekAPIRoute = require("./seatGeekAPI/SeatGeekAPI")
// const stubHubAPIRoute = require("./stubHubAPI")
// const ticketMasterAPIRoute = require("./ticketMasterAPI")
// const info = require("./info/Info")
const users = require("./Users")

// API Route
router.use("/api", routes);


// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
