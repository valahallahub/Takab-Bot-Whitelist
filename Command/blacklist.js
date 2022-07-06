const Discord = require('discord.js')
module.exports = {
    name: 'blacklist',
    async execute(client, message, args, con, prefix, token, log) {
        const member = message.mentions.members.first();
        if (!message.member.roles.cache.find(r => r.name === "blacklist-acces")) {
            const Embedasdasd = new Discord.MessageEmbed()
                .setAuthor('• FAILDED!')
				.setColor("#ff3b3b")
				.setDescription("```\nคุณไม่มียศ!!\n```")
				.setTimestamp()
				.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
            return message.channel.send({ embeds: [Embedasdasd] })
        } else {
             if (args[0]) {
                        con.query(`SELECT discord,Blacklist FROM whitelist  WHERE discord = '${args[0]}'`, function (err, res) {
                            if (res.length) {
                                if (res[0].Blacklist === "True") {
                                    const fgdsssssssssssssssssssssssssssss = new Discord.MessageEmbed()
										.setAuthor('• FAILED!')
										.setColor("#FF0000")
										.setDescription("\nผู้ใช้ ┇ <@" + args[0] + ">```\n โดน Blacklist อยู่ เเล้ว\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
									
                                    message.channel.send({ embeds: [fgdsssssssssssssssssssssssssssss] })
                                } else {
                                    con.query(`UPDATE whitelist SET Blacklist = 'True' WHERE discord = '${args[0]}'`, function (err, res) {
                                        const gfhfhgffghfghfgh = new Discord.MessageEmbed()

											.setAuthor('• SUCCESFULLY!')
											.setColor("#58ffa8")
											.setDescription("\nผู้ใช้ ┇ <@" + args[0] + ">```\n โดน Blacklist\n```\n")
											.setTimestamp()
											.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
						
										
						
						
                                        message.channel.send({ embeds: [gfhfhgffghfghfgh] })
                                    })
                                }
                            }else{
                                const Embedasjhgfsdfsddsfdsfjjgjhdasd = new Discord.MessageEmbed()
									.setAuthor('• FAILED!')
									.setColor("#FF0000")
									.setDescription("```\nผู้ใช้นี้ไม่มี Whitelist!\n```")
									.setTimestamp()
									.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                            message.channel.send({ embeds: [Embedasjhgfsdfsddsfdsfjjgjhdasd] })
                            }

                        })

                } else {
                    const Embedasjhgjjgjhdasd = new Discord.MessageEmbed()
                        .setAuthor('• FAILED!')
						.setColor("#FF0000")
						.setDescription("```\n!blacklist <Discord ID>\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                    message.channel.send({ embeds: [Embedasjhgjjgjhdasd] })
                }
            
    }
    },
};

