const express = require("express");
const mongoose = require("mongoose");
const MemberRouter = require("./routes/member.js");
const GuildRouter = require("./routes/guild.js");
const IncidentRouter = require("./routes/incident.js");
const DatabaseFile = require("./utilities/database.json");

mongoose.connect(`mongodb+srv://${DatabaseFile.Username}:${DatabaseFile.Password}@${DatabaseFile.Host}/${DatabaseFile.Database}?retryWrites=true`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
	console.log("[Mongoose] Connected To Database");
});

mongoose.connection.on("disconnected", () => {
	console.log("[Mongoose] Disconnected From The Database");
});

let app = express();
app.use("/member/", MemberRouter);
app.use("/guild/", GuildRouter);
app.use("/incident/", IncidentRouter);

module.exports = app;
