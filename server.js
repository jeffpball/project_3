const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan');
// const mongoose = require('mongoose');
const mysql = require('mysql');
const path = require('path');
const config = require('config');
const routes = require('./routes');
const app = express();

const port = process.env.PORT || 3001;

// Bodyparser Middleware
app.use(morgan("default"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extend: false }));

app.use(routes);

// MySQL DB Config
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'bananas',
      database: 'edgetickets_db'
  })
}

connection.connect();

// Add routes, both API and view
// app.use(routes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extend: false }));


}

//if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
//}

/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'));
}); */

app.listen(port, () => console.log(`Server started on port ${port}`));
