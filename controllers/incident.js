const mongoose = require("mongoose");
const Incident = require("../models/incident.js");

function IncidentData(Data) {
    this.incident_id = Data.incident_id;
    this.timestamp = Data.timestamp;
    this.guild_id = Data.guild_id;
    this.action = Data.action;
    this.executor = Data.executor;
    this.executor_id = Data.executor_id;
    this.target = Data.target;
    this.target_id = Data.target_id;
    this.reason = Data.reason;
    this.duration = Data.duration;
};

function ErrorData1() {
	this.error = "No data found1";
};

function ErrorData2() {
	this.error = "No data found1";
};

exports.IncidentInformation = [
	function (request, result) {
		try {
			Incident.findOne({
                guild_id: request.params.guild,
                incident_id: request.params.id
            }, (error, incident) => {   
				if(incident != null) {
					let Incident = new IncidentData(incident);
                    return result.json(Incident);
				} else {
                    let Error = new ErrorData1();
					return result.json(Error);
				};
            });
		} catch (error) {
            let Error = new ErrorData2();
            return result.json(Error);
		};
	}
];