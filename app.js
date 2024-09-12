const express = require("express");
const router = require("./src/routes/router");
const connection = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
// app.use("/", router);

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users"),
    (err, result) => {
      if (err) throw err;
      res.json(result);
    };
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT} http://localhost:3000/`);
});
