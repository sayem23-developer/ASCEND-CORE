const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");


module.exports = async (interaction) => {


  const embed = new EmbedBuilder()

    .setTitle("🎫 ASCEND CORE Ticket Setup")

    .setDescription(
      "Configure your ticket system.\n\n" +
      "📁 Set Ticket Category\n" +
      "📜 Set Ticket Logs\n" +
      "🎭 Set Staff Role\n" +
      "📨 Send Ticket Panel"
    )

    .setColor("Blue");



  const row = new ActionRowBuilder()

    .addComponents(


      new ButtonBuilder()

        .setCustomId("ticket_category")

        .setLabel("Set Category")

        .setEmoji("📁")

        .setStyle(ButtonStyle.Primary),



      new ButtonBuilder()

        .setCustomId("ticket_logs")

        .setLabel("Set Logs")

        .setEmoji("📜")

        .setStyle(ButtonStyle.Secondary),



      new ButtonBuilder()

        .setCustomId("ticket_staff")

        .setLabel("Set Staff Role")

        .setEmoji("🎭")

        .setStyle(ButtonStyle.Success),



      new ButtonBuilder()

        .setCustomId("ticket_panel")

        .setLabel("Send Panel")

        .setEmoji("📨")

        .setStyle(ButtonStyle.Danger)

    );



  await interaction.update({

    embeds: [embed],

    components: [row],

  });


};
