const express = require("express");
const MemberController = require("../controllers/member.js");

let router = express.Router();

router.get("/:guild/:id", MemberController.MemberInformation);

module.exports = router;