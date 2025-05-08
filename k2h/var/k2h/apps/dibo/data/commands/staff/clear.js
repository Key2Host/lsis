const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Deletes messages from the channel.')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Number of messages to delete (or all).')
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

        // Get the amount to delete
        const amount = interaction.options.getInteger('amount');
        if (amount <= 0) {
            const invalidAmountEmbed = new EmbedBuilder()
                .setColor('#ff9900')
                .setTitle('⚠️ Invalid Amount')
                .setDescription('Please provide a number greater than 0.');
            return await interaction.reply({ embeds: [invalidAmountEmbed], ephemeral: true });
        }

        // Limit the deletion to 100 messages per batch
        if (amount > 100) {
            const limitEmbed = new EmbedBuilder()
                .setColor('#ff9900')
                .setTitle('⚠️ Limit Exceeded')
                .setDescription('You can only delete up to 100 messages at a time.');
            return await interaction.reply({ embeds: [limitEmbed], ephemeral: true });
        }

        try {
            // Bulk delete messages
            await interaction.channel.bulkDelete(amount, true);

            // Confirmation embed
            const successEmbed = new EmbedBuilder()
                .setColor('#00ff00')
                .setTitle('✅ Messages Deleted')
                .setDescription(`${amount} message(s) have been successfully deleted.`);
            await interaction.reply({ embeds: [successEmbed], ephemeral: true });
        } catch (error) {
            console.error(error);
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('❌ Error')
                .setDescription('There was an error trying to delete messages. Please try again.');
            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};
