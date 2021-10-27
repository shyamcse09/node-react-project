const mysql = require("mysql2")
const dbConfig = require("../config/db.config.js")

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DBNAME
})

connection.connect(error =>{
  if(error) throw error
  console.log("DB connection happend")
})

module.exports = connection