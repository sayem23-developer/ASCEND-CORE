const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Shows information about ASCEND CORE."),

  async execute(interaction) {
    const client = interaction.client;

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle("🤖 ASCEND CORE v3")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: "📦 Version",
          value: "v3.0.0",
          inline: true,
        },
        {
          name: "📚 Library",
          value: "Discord.js v14",
          inline: true,
        },
        {
          name: "🏓 Ping",
          value: `${client.ws.ping} ms`,
          inline: true,
        },
        {
          name: "🌐 Servers",
          value: `${client.guilds.cache.size}`,
          inline: true,
        },
        {
          name: "👥 Users",
          value: `${client.users.cache.size}`,
          inline: true,
        },
        {
          name: "🟢 Status",
          value: "Online",
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
