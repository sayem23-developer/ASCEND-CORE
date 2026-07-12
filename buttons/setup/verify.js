const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const embed = new EmbedBuilder()
    .setTitle("🛡️ ASCEND CORE Verification Setup")
    .setDescription(
      "Configure your server verification system.\n\n" +
      "📢 Set Verify Channel\n" +
      "🎭 Set Verify Role\n" +
      "📨 Send Verification Panel"
    )
    .setColor("Blue");

  const row = new ActionRowBuilder().addComponents(

    new ButtonBuilder()
      .setCustomId("verify_channel")
      .setLabel("Set Channel")
      .setEmoji("📢")
      .setStyle(ButtonStyle.Primary),

    new ButtonBuilder()
      .setCustomId("verify_role")
      .setLabel("Set Role")
      .setEmoji("🎭")
      .setStyle(ButtonStyle.Success),

    new ButtonBuilder()
      .setCustomId("verify_panel")
      .setLabel("Send Panel")
      .setEmoji("📨")
      .setStyle(ButtonStyle.Secondary)

  );

  await interaction.update({
    embeds: [embed],
    components: [row],
  });

};
