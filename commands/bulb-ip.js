const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.gold)
.setTimestamp()
.setDescription(`The Server's IP is 66.70.177.19:2238`);
message.channel.send(embed)

}
module.exports.help = {
  name: "ip"
}
