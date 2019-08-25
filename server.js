const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
// const mongoose = require('mongoose');
const mysql = require('mysql');
const path = require('path');
const config = require('config');
const port = process.env.PORT || 5000;

const app = express();

// Bodyparser Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extend: false }));

// MySQL DB Config
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'edgetickets_db'
  })
}

connection.connect();
// MongoDB Config

const Users = require('./routes/Users')

app.use('/users', Users)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
