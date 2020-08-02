const mongoose = require("mongoose");

const GuildSchema = mongoose.Schema({
    guild_id: String,
    prefix: String,
    audit_channel: String,
    welcome_channel: String,
    incident_channel: String,
    member_count_message: String
});

module.exports = mongoose.model("Guilds", GuildSchema);