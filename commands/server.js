module.exports = {
	name: 'server',
	description: 'Displays server stats',
	execute(message, args) {
		let iconURL;
		if (message.guild.iconURL) {
			iconURL = 'Server icon: ${msg.guild.iconURL}';
		}
		else {
			iconURL = 'Server has no icon!';
		}
		message.channel.send(`${message.guild.name} was created on ${message.guild.createdAt}
				Current member count: ${message.guild.memberCount}
				${iconURL}`);
	},
};
