const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**🌟Chocola🎂 Adlı Botun Sahibi**")
        .setColor(0x00AE86)
        .addField("Adı :", ":movie_camera:İlker Retro HD:movie_camera: ", true)
        .addField("Mesleği :", "Youtuber-Blog", true)
        .addField("Discord Sunucusu :", "https://discord.gg/warJQwx", true)
		    .addField("Yaşı:", ":wrench:15:wrench:", true)
        .addField("Steam hesabı:", "✭♚OxyGeN♚✭ツ", true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sahip',
  description: 'Botun sahibi hakkında bilgi verir.',
  usage: 'sahip'
};
