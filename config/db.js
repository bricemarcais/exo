const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD_DBB,
  database: process.env.DB_NAME,
});
// DANS .env !!!!!!!!!!!!!!!!
// DB_HOST=localhost
// DB_USER=root
// PASSWORD_DBB=0000
// DB_NAME=test_bdd

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion bdd:" + err);
  } else {
    console.log("Connecter à la bdd");
  }
});

module.exports = connection;
