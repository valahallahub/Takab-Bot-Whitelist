const Discord = require('discord.js')
module.exports = {
    name: 'resethwid',
    async execute(client, message, args, con, prefix, token, log) {
        const member = message.mentions.members.first();
        if (!message.member.roles.cache.find(r => r.name === "hwid-aces")) {
            const Embedasdasd = new Discord.MessageEmbed()
                .setAuthor('• FAILDED!')
				.setColor("#ff3b3b")
				.setDescription("```\nคุณไม่สามารถใช้คำสั่งนี้ได้!!\n```")
				.setTimestamp()
				.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
            return message.channel.send({ embeds: [Embedasdasd] })
        } else {

                if (args[0]) {
                    con.query(`SELECT discord FROM whitelist WHERE discord = '${args[0]}' AND Blacklist = 'False'`, function (err, res) {
                        if (res.length) {
                            con.query(`UPDATE whitelist SET hwid = 'Unknown' WHERE discord = '${args[0]}'`, function (err, res) {
                                const hhhhhfgasdfsdfsdfds = new Discord.MessageEmbed()
										.setAuthor('• SUCCESFULLY!')
										.setColor("#58ffa8")
										.setDescription("```\nทำการรี HWID เเล้วครับ!!\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                                message.channel.send({ embeds: [hhhhhfgasdfsdfsdfds] })
                            })
                        }
                        else {
                            const ghfhfghgfhgfhfghfghpisdfsdfsdfhggdfgdfgdfdfgdfgdfg = new Discord.MessageEmbed()
                                    .setAuthor('• FAILDED!')
									.setColor("#ff3b3b")
									.setDescription("```\nผู้ใช้นี้ไม่มี Whitelist!!\n```")
									.setTimestamp()
									.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                            message.channel.send({ embeds: [ghfhfghgfhgfhfghfghpisdfsdfsdfhggdfgdfgdfdfgdfgdfg] })
                        }
                    })
                }
            
        }
    },
};

