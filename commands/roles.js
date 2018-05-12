module.exports = {
	name: 'roles',
	description: 'assign and change roles',
	execute(message, args) {
		message.channel.send(`current args: ${args}`);
		message.channel.send(`roles: ${message.guild.roles.get('Role')}`);
		const guild = message.author.client.guilds.get('325877912026873862');
		message.channel.send(`find guild!: ${guild}`);
		/*
		for(let k in message.guild.roles) {
			message.channel.send(`${message.guild.roles[k].Role.name}`);
		}
		*/
		// const role = args;

		// let roles = message.guild.roles.map(m => message.guild.roles)
		if (args[0] === 'assign') {
			message.channel.send('assigning role!');
		}
		else if (args[0] === 'remove') {
			message.channel.send('remove role!');
		}
		else {
			message.channel.send('no role command!');
		}
	},
};
