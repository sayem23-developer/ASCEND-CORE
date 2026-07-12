const {
  RoleSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const menu = new RoleSelectMenuBuilder()
    .setCustomId("autorole_select")
    .setPlaceholder("🎭 Select auto role");

  const row = new ActionRowBuilder().addComponents(menu);

  await interaction.reply({
    content: "🎭 Select the role to automatically give new members:",
    components: [row],
    flags: 64,
  });

};
