const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.gold)
.setTimestamp()
.setDescription(`:ping_pong: Pong! \`${bot.pings[0]}ms\``);
message.channel.send(embed)

}
module.exports.help = {
  name: "ping"
}
