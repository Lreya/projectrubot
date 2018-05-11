const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { token, prefix } = require('./config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready');
	console.log(`available commands: ${commandFiles}`);
});

client.on('message', msg => {
	if(!msg.content.startsWith(prefix)) return;

	const args = msg.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(!client.commands.has(command)) {
		console.log(`${msg.createdAt} ${command} called by ${msg.author.username}`);
		return;
	}

	try {
		client.commands.get(command).execute(msg, args);
		console.log(`${msg.createdAt} ${command} called by ${msg.author}`);
	}
	catch (e) {
		console.error(e);
		msg.reply('error executing the command');
	}
});

client.login(token);
