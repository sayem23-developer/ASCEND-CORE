const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Shows a user's avatar.")
    .addUserOption(option =>
      option
        .setName("member")
        .setDescription("Select a user")
        .setRequired(false)
    ),

  async execute(interaction) {
    const user =
      interaction.options.getUser("member") || interaction.user;

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setTitle(`🖼️ ${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ size: 4096 }))
      .setFooter({
        text: "ASCEND CORE v3",
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
    });
  },
};
