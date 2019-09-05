module.exports = {
    "development": {
      "username": 'root',
      "password": '',
      "database": 'edgetickets_db',
      "host": 'localhost',
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
}  
