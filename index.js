const Discord = require('discord.js')
const intents = new Discord.Intents(52767)
const client = new Discord.Client({ intents });
client.commands = new Discord.Collection();
const fs = require('fs');
const config = require('./config.json')
const colors = require("colors")
const mysql = require('mysql');
const { token, prefix } = require('./config.json')
const con = mysql.createConnection(config.sql);
function log(text, color) {
    if (typeof (color) == "undefined") { console.log(text) }
    if (typeof (color) != "undefined") { console.log(colors[color](text)) }
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/)
    const cmd = args.shift().toLowerCase();
    try {
        await client.commands.get(cmd).execute(client, message, args, con, prefix, token, log);
    } catch (error) {

    }
});

client.on('ready', () => {
    log("[WHITELIST] Ready !", "green")
})

con.connect(function (err) {
    if (err) {
        log("[ERROR] An error has occurred while connection: " + err, "red");
        log("[INFO] Attempting to establish connection with SQL database.", "yellow");
    } else {
        log("[WHITELIST] Connect Database Succesfully!", "green");
    }
});

client.login(config.token);