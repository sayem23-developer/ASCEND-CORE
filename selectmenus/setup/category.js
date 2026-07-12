const {
  ChannelSelectMenuBuilder,
  ChannelType,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const menu = new ChannelSelectMenuBuilder()
    .setCustomId("ticket_category_select")
    .setPlaceholder("📁 Select ticket category")
    .setChannelTypes(ChannelType.GuildCategory);


  const row = new ActionRowBuilder()
    .addComponents(menu);


  await interaction.reply({
    content: "📁 Select your ticket category:",
    components: [row],
    flags: 64,
  });

};
