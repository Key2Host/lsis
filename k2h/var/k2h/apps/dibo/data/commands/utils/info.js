const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Get server information in style!'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#87CEEB') // Himmelblau
            .setTitle('🌐 Bot Info')
            .setDescription(
                '(c) Copyright 2025 - Lukas Poggemann'
            );

        const message = await interaction.reply({ embeds: [embed] }); // Removed fetchReply as per deprecation
    }
};
