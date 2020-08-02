const express = require("express");
const IncidentController = require("../controllers/incident.js");

let router = express.Router();

router.get("/:guild/:id", IncidentController.IncidentInformation);

module.exports = router;