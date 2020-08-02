const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
    member_id: String,
    guild_id: String,
    warns: Number
});

module.exports = mongoose.model("Member", MemberSchema);