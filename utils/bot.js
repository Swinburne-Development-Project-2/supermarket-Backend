const Discord = require('discord.js');
const config = require('../config.json');

exports.sendMessage = async function(msg){
    const client = new Discord.Client();

    client.on("ready", () => {
        const generalChannel = client.channels.cache.get('740490805554184235');
        generalChannel.send(msg);
    });

    client.login(config.BOT_TOKEN);
}