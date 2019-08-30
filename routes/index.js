const path = require("path");
const router = require("express").Router();
const seatGeekAPIRoute = require("./seatGeekAPI/SeatGeekAPI")
// const stubHubAPIRoute = require("./stubHubAPI")
// const ticketMasterAPIRoute = require("./ticketMasterAPI")
// const info = require("./info/Info")
const users = require("./users/Users")

// API Routes
router.use("/seatGeekAPI", seatGeekAPIRoute);
// router.use("/stubHubAPI", stubHubAPIRoute);
// router.use("/ticketMasterAPI", ticketMasterAPIRoute);
// router.use("/info", info);
router.use("/users", users);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;
