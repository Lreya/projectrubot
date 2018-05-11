module.exports = {
	name: 'avatar',
	description: 'URL of avatar',
	execute(message, args) {
		message.channel.send(message.author.avatarURL);
	},
};
