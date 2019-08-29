const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'info',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      artist: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    },
    {
      timestamps: false
    }
  )