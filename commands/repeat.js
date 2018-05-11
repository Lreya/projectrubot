module.exports = {
	name: 'repeat',
	description: 'repeats user input',
	execute(message, args) {
		message.channel.send(args);
	},
};
