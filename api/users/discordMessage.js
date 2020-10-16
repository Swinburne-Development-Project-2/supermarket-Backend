const discordMsg = require('../../utils/bot');

exports.sendDiscordMessage = function(req,res){
    var message = req.body.message;
    discordMsg.sendMessage(message);
    return res.status(200);
}