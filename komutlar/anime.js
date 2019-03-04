const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media0.giphy.com/media/zGp4dvzQMtIHe/giphy.gif?cid=3640f6095c642b487959494451639800", "https://media1.giphy.com/media/h5TLWOHzoJAsM/giphy.gif?cid=3640f6095c642bd84b32436449d47c1a", "https://media3.giphy.com/media/JDeE5kYMFtAs0/giphy.gif?cid=3640f6095c6427cc693877726f5ff396", "https://media1.tenor.com/images/134212ba34a8099c993e07a686345f84/tenor.gif?itemid=8215787", "https://media0.giphy.com/media/l2DmhP8bKV9ja/giphy.gif?cid=3640f6095c642e95594f2f47770d1f65",
    "https://media1.giphy.com/media/7Bo7EHWVqbCdq/giphy.gif?cid=3640f6095c64233d5466427241fb49d1", "https://media1.giphy.com/media/o12yBxEhLR9Oo/200w.webp?cid=3640f6095c643808365461663212462e", "https://media2.giphy.com/media/ObPt9xSdJaF68/giphy.gif?cid=3640f6095c643808365461663212462e,"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle(":purple_heart:Anime Gifniz Kawaii:purple_heart:")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'anime',
  description: 'Rastgele anime gif atar.',
  usage: 'anime'
};
