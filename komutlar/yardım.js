const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle(":flag_tr:Komutlar:flag_tr:")
  .setDescription('')
  .setColor('RANDOM')
  .addField("**» Eğlence Komutları**", ` \n ➥ ${prefix}8ball = Bota soru sorarsınız. \n ➥ ${prefix}anime = Rasgele anime gif atar. \n ➥ ${prefix}alkış = Alkışlarsınız. \n ➥ ${prefix}aşkölçer = Birisi ile aranızdaki aşkı ölçer. \n ➥ ${prefix}balıktut = Balık tuttarsınızz. \n ➥ ${prefix}gif = Gif atar. \n ➥ ${prefix}kos = Koşarsınız \n ➥ ${prefix}pixel = Profil fotoğrafınızı pixelleştir.. \n ➥ ${prefix}çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n ➥ ${prefix}hesapla = Matematik hesaplar.         \n ➥ ${prefix}stresçarkı = Stresçarkı çevirir. \n ➥ ${prefix}surf = Surf yaparsınız.\n ➥ ${prefix}tekmeat= Tekme atarsınız. \n ➥ ${prefix}wasted = PPnize WASTED resmi ekler. \n ➥ ${prefix}urfa = urfa kebabı gönderir. \n ➥ ${prefix}arkadasin = Yaz Bak Ne oluyo :D. \n ➥ ${prefix}kahkaha = Kahkaha atarsın. \n ➥ ${prefix}çayiç = Çay içersin. \n ➥ ${prefix}çayaşekerat = Bota soru sorarsınız. \n ➥ ${prefix}herkesebendençay = Herkese çay dağıtırsın. \n ➥ ${prefix}coolresim = Güzel resim gösterir.  \n ➥ ${prefix}kaçcm = seninki kaç cm? \n ➥ ${prefix}ailemiz = Botun olduğu sunucuları gösterir. \n ➥ ${prefix}afk = afk kalırsınız \n ➥ ${prefix}unafk = Afk olmassınız. \n ➥ ${prefix}sins-aga = Sizce :D \n ➥ ${prefix}starwars = StarWars Gösterir.`)
  .addField("**» Kullanıcı Komutları**", ` \n ➥ ${prefix}avatar = Avatarınızı gösterir. \n ➥ ${prefix}sunucubilgi = Sunucu bilgilerini gösterir. \n ➥ ${prefix}sunucuicon = Sunucu iconunu gösterir. \n ➥ ${prefix}sahip = Sahip bilgisini gösterir. \n ➥ ${prefix}ping = Botun pingini gösterir. \n ➥ ${prefix}rigby = rigby hakkında bilgi verir. \n ➥ ${prefix}yaz = Bota yazı yazdırır.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `\n ➥ ${prefix}ban = İstediğiniz Kişiyi Sunucudan Banlar. \n ➥ ${prefix}kick  = İstediğiniz Kişiyi Sunucudan Atar. \n ➥ ${prefix}unban = İstediğiniz Kişinin Yasağını Açar. \n ➥ ${prefix}temizle = Belirtilen Miktarda Mesajı Silir. (MAX 100) \n ➥ ${prefix}oylama = Oylama Açar. \n ➥ ${prefix}duyuru = Güzel Bir Duyuru Görünümü Sağlar. \n ➥ ${prefix}yazı-kanal-aç = Yazı kanalı açar. \n ➥ ${prefix}eval = Kod denemek için kullanılır.`)
  .addField("**» Botun Ana Komutları**", `\n ➥ ${prefix}yardım = BOT Komutlarını Atar. \n ➥ ${prefix}davet = BOT Davet Linkini Atar. \n ➥ ${prefix}bilgi = Discord sunucu ,youtube kanalı ve bot davet linkini atar`)
  .addField("**» Steam Komutları**", `\n ➥ ${prefix}steamstore (oyun adı) = Steam oyunlarını gösterir.`)
  .setFooter('🔥Rigby🎮-V2.2')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komutss]'
};
