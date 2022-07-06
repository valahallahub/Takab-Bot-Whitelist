const Discord = require('discord.js')
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
module.exports = {
    name: 'redeem',
    async execute(client, message, args, con, prefix, token, log) {
        if (args[0]) {
            con.query(`SELECT userkey FROM whitelist WHERE discord = '${message.member.id}'`, function (err, results) {
                if (results.length) {
                    const gdfdg = new Discord.MessageEmbed()



						.setAuthor('• FAILDED!')
                        .setColor("#ff0000")
                        .setDescription("```\nคุณมี whitelist อยู่เเล้ว!\n```")
						.setTimestamp()
						.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');

    
                    message.channel.send({ embeds: [gdfdg] })
                } else {
                    con.query(`SELECT discord FROM whitelist WHERE userkey = '${args[0]}'`, function (err, res) {
                        if (res.length) {
                            if (res[0].discord === "Unknown") {
                                con.query(`UPDATE whitelist SET discord = '${message.member.id}' WHERE userkey = '${args[0]}'`, function (err, res) {
                                    const role = message.guild.roles.cache.find(role => role.name === 'buyer  script');
                                    message.member.roles.add(role)
                                    const hhhhhfgasdffgfffffffffffdsfgsddfgfdgdfgsdfsdfds = new Discord.MessageEmbed()
                                        .setAuthor('• SUCCESFULLY!')
										.setColor("#58ffa8")
										.setDescription("```\nสำเร็จ!! สามารถพิมพ์ !getscript เพื่อรับ script ได้เลยครับ!!\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                                    message.channel.send({ embeds: [hhhhhfgasdffgfffffffffffdsfgsddfgfdgdfgsdfsdfds] })
                                })
                            } else {
                                const ghfhffhfgh = new Discord.MessageEmbed()
										.setAuthor('• FAILDED!')
										.setColor('#00FF06')
										.setDescription("```\nKey นี้ถูกใช้ไปเเล้ว!!\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                                message.channel.send({ embeds: [ghfhffhfgh] })
                            }
                        } else {
                            const fgdfdggdgfdgfdgfdg = new Discord.MessageEmbed()
										.setAuthor('• FAILDED!')
										.setColor('#00FF06')
										.setDescription("```\nKey ผิดพลาด!!\n```")
										.setTimestamp()
										.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
                            message.channel.send({ embeds: [fgdfdggdgfdgfdgfdg] })
                        }
                    })
                }
            })
        }else{
            const fgdgdgfdgfdgd = new Discord.MessageEmbed()
            .setAuthor('• FAILDED!')
			.setColor('#00FF06')
			.setDescription("```\nกรุณาระบุ KEY ของท่านด้วยครับ!!\n```")
			.setTimestamp()
			.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
        message.channel.send({ embeds: [fgdgdgfdgfdgd] })    
        }
    },
};