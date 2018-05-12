module.exports = {
	name: 'emoji',
	description: 'link to emoji',
	execute(message, args) {
		console.log('test before emoji const');
		console.log(`args[0]: ${args[0]}`);
		const emoji = message.client.emojis.find('name', 'wave');
		console.log('test after emoji const');
		message.channel.send(`${emoji}`);
		if(emoji === null) {
			message.channel.send('yes emoji');
		}
		else {
			message.channel.send('no emoji');
		}
	},
};
