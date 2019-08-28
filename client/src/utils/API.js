import axios from "axios";

export default {
  // Gets event locations from the SeatGeekAPI by typing an artist name into the arist search input field and clicking search 
  getLocations: function(q) {
    return axios.get("/api/seatGeekAPI/SeatGeekAPI", { params: { q: "location:" + q } });
  },
  // Gets all saved info
  getSavedInfo: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved info with the given id
  deleteSavedInfo: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves info to the database
  saveInfo: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
