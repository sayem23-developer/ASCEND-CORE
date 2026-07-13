const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { createEmbed } = require("../config/embeds");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setup")
    .setDescription("Open the ASCEND CORE setup panel.")
    .setDefaultMemberPermissions(0x00000008),

  async execute(interaction) {
    const embed = createEmbed(
      "⚙️ ASCEND CORE Setup",
      "Welcome, Administrator!\n\nChoose a system to configure below."
    );

    const row1 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("setup_verify")
        .setLabel("Verification")
        .setEmoji("🛡️")
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId("setup_ticket")
        .setLabel("Tickets")
        .setEmoji("🎫")
        .setStyle(ButtonStyle.Primary),

      new ButtonBuilder()
        .setCustomId("setup_welcome")
        .setLabel("Welcome & Goodbye")
        .setEmoji("👋")
        .setStyle(ButtonStyle.Success)
    );

    const row2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("setup_logs")
        .setLabel("Logs")
        .setEmoji("📜")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId("setup_autorole")
        .setLabel("Auto Role")
        .setEmoji("🎭")
        .setStyle(ButtonStyle.Secondary),

      new ButtonBuilder()
        .setCustomId("setup_settings")
        .setLabel("Settings")
        .setEmoji("⚙️")
        .setStyle(ButtonStyle.Danger)
    );

    await interaction.reply({
      embeds: [embed],
      components: [row1, row2],
    });
  },
};
