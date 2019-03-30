const Discord = require("discord.js");
const HypixelAPI = require('hypixel-api')
const client = new HypixelAPI('327aaf6b-0d25-47bb-bb70-ce3309c6aea0')

module.exports.run = async (bot, message, args) => {

let user = args.slice(0).join(" ");

client.getPlayer('name', user).then((player) => {
    console.log(player)
let playerembed = new Discord.RichEmbed()
  .setTitle(`Player: ` + player.displayname)
  .setColor(`RANDOM`)
  .setTimestamp()
  message.channel.send(playerembed);
}).catch((err) => {
    console.error('Error! ' + err)
    message.channel.send(`:no_entry: \`Usage: !player <name>\``)
})

}

module.exports.help = {
  name: "hypixel"
}
