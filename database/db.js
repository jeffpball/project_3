
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('je29kxkvllwsl7zc', 'cbrzitz0yaiz0qm6', 'ekcvrpo7h2cytjwf', {
  host: 'd6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db