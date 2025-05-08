const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Measure bot latency with style!'),
	async execute(interaction) {
		// Initial embed reply
		const embed = new EmbedBuilder()
			.setColor('#0099ff')
			.setTitle('Pinging...')
			.setDescription('🕒 Measuring latency...');

		const message = await interaction.reply({ embeds: [embed] }); // Removed fetchReply as per deprecation

		// Measure latency after the initial reply
		const latency = Date.now() - interaction.createdTimestamp;
		const apiLatency = Math.round(interaction.client.ws.ping);

		// Animation frames
		const animationFrames = ['🕒', '🕔', '🕘', '🕛'];
		let frameIndex = 0;

		// Simulate an animation asynchronously
		const animation = setInterval(async () => {
			frameIndex = (frameIndex + 1) % animationFrames.length;
			const animatedEmbed = new EmbedBuilder()
				.setColor('#0099ff')
				.setTitle('Pinging...')
				.setDescription(`${animationFrames[frameIndex]} Measuring latency...`);
			await interaction.editReply({ embeds: [animatedEmbed] });
		}, 500);

		// Stop animation and send the final result after a delay
		setTimeout(async () => {
			clearInterval(animation);
			const resultEmbed = new EmbedBuilder()
				.setColor(latency < 200 ? '#00ff00' : latency < 500 ? '#ffff00' : '#ff0000')
				.setTitle('🏓 Pong!')
				.setDescription(
					`- **Bot Latency:** ${latency}ms\n` +
					`- **API Latency:** ${apiLatency}ms\n` +
					`- **Status:** ${latency < 200 ? '🟢 Excellent' : latency < 500 ? '🟡 Good' : '🔴 Poor'}`
				);
			await interaction.editReply({ embeds: [resultEmbed] });
		}, 3000); // Run animation for 3 seconds before showing the result
	},
};
