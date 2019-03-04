module.exports = member => {
  let guild = member.guild;
  member.send('');
  guild.defaultChannel.send(`${member.user.username}Bugün Nasılsın?`);
};
