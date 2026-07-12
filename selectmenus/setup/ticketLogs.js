const {
  ChannelSelectMenuBuilder,
  ChannelType,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const menu = new ChannelSelectMenuBuilder()
    .setCustomId("ticket_logs_select")
    .setPlaceholder("📜 Select ticket logs channel")
    .setChannelTypes(ChannelType.GuildText);


  const row = new ActionRowBuilder()
    .addComponents(menu);


  await interaction.reply({
    content: "📜 Select your ticket logs channel:",
    components: [row],
    flags: 64,
  });

};
