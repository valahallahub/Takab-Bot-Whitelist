const Discord = require('discord.js')
module.exports = {
    name: 'unblacklist',
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
                                if (res[0].Blacklist === "False") {
                                    const sdfsdfsdfdfsdf = new Discord.MessageEmbed()

										.setAuthor('• FAILDED!')
										.setColor("#ff3b3b")
										.setDescription("```\nผูใช้นี้ยังไม่โดน Blacklist!!\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
										
                                    message.channel.send({ embeds: [sdfsdfsdfdfsdf] })
                                } else {
                                    con.query(`UPDATE whitelist SET Blacklist = 'False' WHERE discord = '${args[0]}'`, function (err, res) {
                                        const gfhfhgffghfsdfsdfsdfsdfghfgh = new Discord.MessageEmbed()
											.setAuthor('• SUCCESFULLY!')
											.setColor("#58ffa8")
											.setDescription("\nผู้ใช้ ┇ <@" + args[0] + ">```\n ถูกปลด Blacklist\n```\n")
											.setTimestamp()
											.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
											
                                        message.channel.send({ embeds: [gfhfhgffghfsdfsdfsdfsdfghfgh] })
                                    })
                                }
                            }else{
                                const Embedasjsdfsdfsdfsdfsdfhgfsdfsddsfdsfjjgjhdasd = new Discord.MessageEmbed()
									.setAuthor('• FAILDED!')
									.setColor("#ff3b3b")
									.setDescription("```\nผู้ใช้นี้ยังไม่มี Whitelist!!\n```")
									.setTimestamp()
									.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                            message.channel.send({ embeds: [Embedasjsdfsdfsdfsdfsdfhgfsdfsddsfdsfjjgjhdasd] })
                            }

                        })
                } else {
                    const Embedasjhgjjgjhdasfdfvdfgerdgsd = new Discord.MessageEmbed()
                        .setAuthor('• FAILDED!')
									.setColor("#ff3b3b")
									.setDescription("```\n!unblacklist <Discord Id>\n```")
									.setTimestamp()
									.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                    message.channel.send({ embeds: [Embedasjhgjjgjhdasfdfvdfgerdgsd] })
                }
            
    }
    },
};