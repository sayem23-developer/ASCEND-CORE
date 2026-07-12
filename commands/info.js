const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Shows information about ASCEND CORE."),

  async execute(interaction) {

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🤖 ASCEND CORE v3")
      .setDescription("Professional Discord Community Bot")
      .addFields(
        {
          name: "📦 Version",
          value: "v3.0.0",
          inline: true,
        },
        {
          name: "⚡ Library",
          value: "Discord.js v14",
          inline: true,
        },
        {
          name: "👨‍💻 Developer",
          value: "SAYEEM",
          inline: true,
        },
        {
          name: "🟢 Status",
          value: "Online",
          inline: true,
        },
        {
          name: "🏓 Ping",
          value: `${interaction.client.ws.ping} ms`,
          inline: true,
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
