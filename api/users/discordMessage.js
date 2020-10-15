const pool = require("../../config/database");
var bcrypt = require('bcrypt');
const discordMsg = require('../../utils/bot');

exports.sendDiscordMessage = async function(req,res){
    var message = req.body.message;
    discordMsg.sendMessage(message);
    res.status(200);
}