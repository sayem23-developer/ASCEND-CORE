const {
  RoleSelectMenuBuilder,
  ActionRowBuilder,
} = require("discord.js");


module.exports = async (interaction) => {


  const menu = new RoleSelectMenuBuilder()

    .setCustomId("ticket_staff_select")

    .setPlaceholder("🎭 Select staff role");



  const row = new ActionRowBuilder()

    .addComponents(menu);



  await interaction.reply({

    content: "🎭 Select your ticket staff role:",

    components: [row],

    flags: 64,

  });


};
