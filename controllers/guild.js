const mongoose = require("mongoose");
const Guild = require("../models/guild.js");

function GuildData(Data) {
	this.guild_id = Data.guild_id;
    this.guild_prefix = Data.prefix;
    this.guild_audit_channel = Data.audit_channel;
    this.guild_welcome_channel = Data.welcome_channel;
    this.guild_incident_channel = Data.incident_channel;
    this.guild_member_count_channel = Data.member_count_message;
};

function ErrorData() {
	this.error = "No data found";
};

exports.GuildInformation = [
	function (request, result) {
		try {
			Guild.findOne({
                guild_id: request.params.id
            }, (error, guild) => {   
				if(guild != null) {
					let Guild = new GuildData(guild);
                    return result.json(Guild);
				} else {
                    let Error = new ErrorData();
					return result.json(Error);
				};
            });
		} catch (error) {
            let Error = new ErrorData();
            return result.json(Error);
		};
	}
];