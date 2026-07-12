const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Shows information about this server."),

  async execute(interaction) {
    const guild = interaction.guild;

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle(`🏠 ${guild.name}`)
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        {
          name: "👑 Owner",
          value: `<@${guild.ownerId}>`,
          inline: true,
        },
        {
          name: "👥 Members",
          value: `${guild.memberCount}`,
          inline: true,
        },
        {
          name: "🚀 Boost Level",
          value: `${guild.premiumTier}`,
          inline: true,
        },
        {
          name: "💎 Boosts",
          value: `${guild.premiumSubscriptionCount ?? 0}`,
          inline: true,
        },
        {
          name: "🎭 Roles",
          value: `${guild.roles.cache.size}`,
          inline: true,
        },
        {
          name: "📂 Channels",
          value: `${guild.channels.cache.size}`,
          inline: true,
        },
        {
          name: "📅 Created",
          value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
        }
      )
      .setFooter({
        text: "ASCEND CORE v3",
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
    });
  },
};
