const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows all available commands."),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("📚 ASCEND CORE Help")
      .setDescription("Welcome to **ASCEND CORE v3**")
      .addFields(
        {
          name: "🏓 Core",
          value: "`/ping`\n`/help`\n`/info`\n`/setup`",
          inline: true,
        },
        {
          name: "🛡 Community",
          value: "Coming Soon...",
          inline: true,
        },
        {
          name: "⚙ Moderation",
          value: "Coming Soon...",
          inline: true,
        }
      )
      .setFooter({
        text: "ASCEND CORE v3",
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
