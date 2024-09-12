const express = require("express");
const app = express();
const router = require("./src/routes/router");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT} http://localhost:3000/`);
});
