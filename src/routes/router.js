const express = require("express");
const router = express.Router();

router.get("/infos", (req, res) => {
  res.json({ voiture: "Toyota", name: "Supra", model: "2000" });
});

router.get("/secret", (req, res) => {
  res.status(201).send("trouvé page secrète");
});

router.get("/red", (req, res) => {
  res.redirect("/");
});

router.get("/utilisateur/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Informations sur l'utilisateur ${userId}`);
});

router.get("*", (req, res) => {
  res.status(404).send("Page non trouvée");
});
module.exports = router;
