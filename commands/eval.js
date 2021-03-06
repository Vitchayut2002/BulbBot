const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '263233275479195648') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .addField(`:inbox_tray: Input:`, `\`\`\`js\n${codein}\`\`\``)
        .addField(`:outbox_tray: Output:`, `\`\`\`js\n${code}\n\`\`\``)
        .setTimestamp()
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}
