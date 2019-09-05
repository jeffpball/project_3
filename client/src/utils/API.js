import axios from "axios";

export default {
  // Gets event locations from the SeatGeekAPI by typing an artist name into the arist search input field and clicking search 
  getLocations: function(q) {
    return axios.get("/api/seatGeekAPI/SeatGeekAPI", { params: { q: "location:" + q } });
  },
  // Gets event locations from the SeatGeekAPI by typing an artist name into the arist search input field and clicking search 
  getPriceSeatGeek: function(eventData) {
    return axios.post("/api/seatgeek/search", eventData);
  },
  getPriceStubHub: function(q) {
    return axios.get("/api/stubHubAPI/StubHubAPI", { params: { q: "price:" + q } });
  },
  getPriceTicketMaster: function(q) {
    return axios.get("/api/ticketMasterAPI/TicketMasterAPI", { params: { q: "price:" + q } });
  },
  // Gets all saved info
  getSavedInfo: function() {
    return axios.get("/api/info/Info");
  },
  // Deletes the saved info with the given id
  deleteSavedInfo: function(id) {
    return axios.delete("/api/info/Info" + id);
  },
  // Saves info to the database
  saveInfo: function(ticketData) {
    return axios.post("/api/info/Info", ticketData);
  }
};
