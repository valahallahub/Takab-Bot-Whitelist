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
    name: 'gen',
    async execute(client, message, args, con, prefix, token, log) {
        if (!message.member.roles.cache.find(r => r.name === "gen-acces")) {
            const Embedasdasd = new Discord.MessageEmbed()


			.setAuthor('• FAILDED!')
			.setColor("#ff3b3b")
			.setDescription("```\nคุณไม่มียศ!!\n```")
			.setTimestamp()
			.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');

            return message.channel.send({ embeds: [Embedasdasd] });
        } else {
            if (args[0]) {
                const Embedasdasd = new Discord.MessageEmbed()

					.setAuthor('• SUCCESFULLY!')
					.setColor("#58ffa8")
					.setDescription("```\nGen " + args[0] + " KEY\n```")
					.setTimestamp()
					.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');
					
					
                message.channel.send({ embeds: [Embedasdasd] })
                for (var i = 1; i <= args[0]; i++) {
                    (function () {
                        let randomKey = `Src-${makeid(8)}`
                        con.query(`INSERT INTO whitelist (userkey,hwid,discord,Blacklist) VALUES ('${randomKey}','Unknown','Unknown','False')`, function (err, results, fields) {
                            const fgsdfsdfsdhfgfgh = new Discord.MessageEmbed()

				    .setAuthor('• SUCCESFULLY!')
					.setColor("#58ffa8")
					.setDescription("```\n" + randomKey + "\n```")
					.setTimestamp()
					.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');

                            message.channel.send({ embeds: [fgsdfsdfsdhfgfgh] })
                        })
                    })();
                }
            } else {
                const hfgfghjklhlgdfhjkldfghjklzopidfg = new Discord.MessageEmbed()


					.setAuthor('• SUCCESFULLY!')
					.setColor("#58ffa8")
					.setDescription("```\n!gen <จำนวน>\n```")
					.setTimestamp()
					.setFooter('Src', 'https://media.discordapp.net/attachments/899934246066597959/936545005059862568/fbb6a49398c98a126d1b7dfded0db52b.jpg');

                message.channel.send({ embeds: [hfgfghjklhlgdfhjkldfghjklzopidfg] })
            }
        }
    },
};