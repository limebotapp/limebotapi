const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema({
    incident_id: Number,
    timestamp: Date,
    guild_id: String,
    action: String,
    executor: String,
    executor_id: String,
    target: String,
    target_id: String,
    reason: String,
    duration: String
});

module.exports = mongoose.model("Incidents", IncidentSchema);