const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lock')
		.setDescription('Locks or unlocks the current channel.')
		.addBooleanOption(option =>
			option.setName('status')
				.setDescription('Set to true to lock or false to unlock the channel.')
				.setRequired(true)
		),
	async execute(interaction) {
		// Check user permissions
		if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
			const noPermissionEmbed = new EmbedBuilder()
				.setColor('#ff0000')
				.setTitle('🚫 Insufficient Permissions')
				.setDescription('You need the **Manage Messages** permission to use this command.');
			return await interaction.reply({ embeds: [noPermissionEmbed], ephemeral: true });
		}

		// Get the lock status
		const status = interaction.options.getBoolean('status');
		const overwriteOptions = status
			? { SEND_MESSAGES: false } // Lock: Deny sending messages
			: { SEND_MESSAGES: null }; // Unlock: Revert to default permissions

		try {
			// Update the channel permissions
			await interaction.channel.permissionOverwrites.edit(interaction.channel.guild.roles.everyone, overwriteOptions);

			// Embed response
			const responseEmbed = new EmbedBuilder()
				.setColor(status ? '#ff0000' : '#00ff00')
				.setTitle(status ? '🔒 Channel Locked' : '🔓 Channel Unlocked')
				.setDescription(
					status
						? 'This channel has been locked. Members cannot send messages.'
						: 'This channel has been unlocked. Members can send messages again.'
				);

			await interaction.reply({ embeds: [responseEmbed] });
		} catch (error) {
			console.error(error);
			const errorEmbed = new EmbedBuilder()
				.setColor('#ff0000')
				.setTitle('❌ Error')
				.setDescription('There was an error trying to update the channel permissions. Please try again.');
			await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
		}
	},
};
