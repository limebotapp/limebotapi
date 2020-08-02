const mongoose = require("mongoose");
const Member = require("../models/member.js");

function MemberData(Data) {
	this.member_id = Data.member_id;
	this.guild_id = Data.guild_id;
	this.warns = Data.warns;
};

function ErrorData() {
	this.error = "No data found";
};

exports.MemberInformation = [
	function (request, result) {
		try {
			Member.findOne({
				guild_id: request.params.guild,
				member_id: request.params.id
            }, (error, member) => {   
				if(member != null) {
					let Member = new MemberData(member);
                    return result.json(Member);
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