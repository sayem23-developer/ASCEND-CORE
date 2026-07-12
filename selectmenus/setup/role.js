const {
  RoleSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");

module.exports = async (interaction) => {

  const roleMenu = new RoleSelectMenuBuilder()
    .setCustomId("verify_role_select")
    .setPlaceholder("🎭 Select verification role");

  const row = new ActionRowBuilder()
    .addComponents(roleMenu);

  await interaction.reply({
    content: "🎭 Select your verification role:",
    components: [row],
    ephemeral: true,
  });

};
