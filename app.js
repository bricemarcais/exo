const express = require("express");
const router = require("./src/routes/router");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "db",
});
connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion bdd:" + err);
  } else {
    console.log("Connecter à la bdd");
  }
});

app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT} http://localhost:3000/`);
});
