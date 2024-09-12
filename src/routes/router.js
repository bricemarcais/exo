const express = require("express");
const router = express.Router();

const controller = require("./src/controllers/controller");
// const infosPage = require("./src/controllers/controller");
// const redirect = require("./src/controllers/controller");
// const userController = require("./src/controllers/controller");

router.get("/", controller.homePage);
router.get("/infos", controller.aboutPage);
router.get("/about", controller.infosPage);
router.get("/red", controller.redirect);
router.get("/utilisateur/:id", controller.userController);
router.get("*", controller.page404);

module.exports = router;
