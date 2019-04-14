const Discord = require("discord.js");
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  
  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  if (!args[0]) return message.channel.send(`:no_entry: \`Please include a question.\``);
  var question = args.join(" ");
  let pollEmbed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setDescription(question)
  .setColor(config.gold);
  message.channel.send(pollEmbed).then(function (message) {
    message.react("<:green_tick:566945998761361408>").then(() => {
    message.react("<:red_tick:566946004948090880>")
  });
 });
}

module.exports.help = {
  name: "poll"
}
