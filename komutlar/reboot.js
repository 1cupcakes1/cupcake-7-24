const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("💻Sistem Yenilenior...").then(msg => {
        console.log("💻Sistem Yenilenior...");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};