const path = require("path");
const router = require("express").Router();
const seatGeekAPIRoute = require("./seatGeekAPI")
const stubHubAPIRoute = require("./stubHubAPI")
const ticketMasterAPIRoute = require("./ticketMasterAPI")

// API Routes
router.use("/seatGeekAPI", seatGeekAPIRoute);
router.use("/stubHubAPI", stubHubAPIRoute);
router.use("/ticketMasterAPI", ticketMasterAPIRoute);


// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
