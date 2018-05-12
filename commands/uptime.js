module.exports = {
	name: 'uptime',
	description: 'Time since last disconnect',
	execute(message, args) {
		const seconds = Math.floor(message.client.uptime / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		message.channel.send(`Rubot has been online for ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`);
		/*
		message.channel.send({ embed: {
			color: 3447003,
			description: `Rubot has been online for ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`,
		} });
		*/
	},
};
