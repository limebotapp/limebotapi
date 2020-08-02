const express = require("express");
const GuildController = require("../controllers/guild.js");

let router = express.Router();

router.get("/:id", GuildController.GuildInformation);

module.exports = router;