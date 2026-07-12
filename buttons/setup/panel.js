const {
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  EmbedBuilder,
} = require("discord.js");

const { getGuild } = require("../../utils/database");

module.exports = async (interaction) => {

  const data = getGuild(interaction.guild.id);

  if (!data.verification || !data.verification.channelId) {

    return interaction.reply({
      content: "❌ Verification channel is not set.",
      ephemeral: true,
    });

  }


  const channel = interaction.guild.channels.cache.get(
    data.verification.channelId
  );


  if (!channel) {

    return interaction.reply({
      content: "❌ Channel not found.",
      ephemeral: true,
    });

  }


  const embed = new EmbedBuilder()
    .setTitle("🛡️ Server Verification")
    .setDescription(
      "Click the button below to verify and get access."
    )
    .setColor("Blue");


  const row = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId("verify_member")
        .setLabel("Verify")
        .setEmoji("✅")
        .setStyle(ButtonStyle.Success)
    );


  await channel.send({
    embeds: [embed],
    components: [row],
  });


  return interaction.reply({
    content: `✅ Verification panel sent to ${channel}`,
    ephemeral: true,
  });

};
