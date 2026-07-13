const {
  ChannelSelectMenuBuilder,
  ChannelType,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const menu = new ChannelSelectMenuBuilder()
    .setCustomId("goodbye_channel_select")
    .setPlaceholder("👋 Select goodbye channel")
    .setChannelTypes(ChannelType.GuildText);

  const row = new ActionRowBuilder()
    .addComponents(menu);

  await interaction.reply({
    content: "👋 Select your goodbye channel:",
    components: [row],
    flags: 64,
  });

};
