const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");

router.get("/", controller.homePage);
router.get("/infos", controller.infosPage);
router.get("/about", controller.aboutPage);
router.get("/red", controller.redirect);
router.get("/utilisateur/:id", controller.userController);
router.get("*", controller.page404);

module.exports = router;
