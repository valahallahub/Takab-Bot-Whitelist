const Discord = require('discord.js')
const Script = "loadstring(game:HttpGet(''))()"

module.exports = {
    name: 'getscript',
    async execute(client, message, args, con, prefix, token, log) {
        con.query(`SELECT discord,userkey,Blacklist FROM whitelist WHERE discord = '${message.author.id}'`, function (err, res) {
            if (res.length) {
                if (res[0].Blacklist === "True") {
                    const gfhgfhfhgfgf = new Discord.MessageEmbed()
                        .setAuthor('• FAILDED!')
                        .setColor("#ff0000")
                        .setDescription("```\nคุณโดน blacklist อยู่!!\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                    message.channel.send({ embeds: [gfhgfhfhgfgf] });
                } else {
                    const gfgfgf = new Discord.MessageEmbed()
                        .setAuthor('• SUCCESFULLY!')
                        .setColor("#0094ff")
                        .setDescription("```\nทำการส่ง script ไปที่เเชทส่วนตัวของคุณเเล้วครับ\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setAuthor('• VALHALLA HUB')
                        .setColor("#0094ff")
                        .setDescription("**Script**\n```lua\n_G.Key = '" + res[0].userkey + "'\n" + Script + "```\n \n")
                    	.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
			message.channel.send({ embeds: [gfgfgf] });
                    client.users.cache.get(message.member.id).send({ embeds: [exampleEmbed] });
                }
            } else {
                const exagfggfmpleEmbed = new Discord.MessageEmbed()
                    .setAuthor('• FAILDED!')
                    .setColor("#ff0000")
                    .setDescription("```\nคุณยังไม่มี Whitelist !!\n```")
					.setTimestamp()
					.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                message.channel.send({ embeds: [exagfggfmpleEmbed] });
            }
        })
    },
};