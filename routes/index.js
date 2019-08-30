const path = require("path");
const router = require("express").Router();
const seatGeekAPIRoute = require("./seatGeekAPI/SeatGeekAPI")
// const stubHubAPIRoute = require("./stubHubAPI")
// const ticketMasterAPIRoute = require("./ticketMasterAPI")
// const info = require("./info/Info")


// API Routes
router.use("/seatGeekAPI", seatGeekAPIRoute);
// router.use("/stubHubAPI", stubHubAPIRoute);
// router.use("/ticketMasterAPI", ticketMasterAPIRoute);
// router.use("/info", info);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
