const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`:no_entry: \`Insufficient Permissions!\``);
  if(args <= 1) return message.channel.send(`:no_entry: \`You cannot clear less than 1 messages at one time!\``);
  if(args >= 100) return message.channel.send(`:no_entry: \`You cannot clear more than 100 messages at one time!\``);
  if(!args[0]) return message.channel.send(`:no_entry: \`Please include the amount of value to clear the chat!\``);
  message.channel.bulkDelete(args[0]).then(() => {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor("#f44242")
    .setDescription(`:pencil: \`Cleared ${args[0]} messages.\``)
    .setTimestamp()
    message.channel.send(embed).then(message => message.delete(4000));
   }).catch().catch((e) => message.channel.send(`:no_entry: \`You cannot delete messages older than 14 days.\``));
    //message.channel.send(clearbotcommandsystem).then(msg => {msg.delete(5850)});
  //});

}

module.exports.help = {
  name: "clear"
}
