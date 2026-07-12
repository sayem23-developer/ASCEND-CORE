const {
  ChannelSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const menu = new ChannelSelectMenuBuilder()
    .setCustomId("verify_channel_select")
    .setPlaceholder("📢 Select verification channel")
    .setChannelTypes(0);

  const row = new ActionRowBuilder()
    .addComponents(menu);

  await interaction.reply({
    content: "📢 Select a channel for verification:",
    components: [row],
    flags: 64,
  });

};
