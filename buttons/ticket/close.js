const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { sendTicketLog } = require("../../utils/logs/ticketLog");


module.exports = async (interaction) => {


  if (!interaction.channel.name.startsWith("ticket-")) {

    return interaction.reply({

      content: "❌ This is not a ticket channel.",

      flags: 64,

    });

  }




  const deleteButton = new ActionRowBuilder()

    .addComponents(

      new ButtonBuilder()

        .setCustomId("delete_ticket")

        .setLabel("Delete Ticket")

        .setEmoji("🗑️")

        .setStyle(ButtonStyle.Danger)

    );





  await sendTicketLog(

    interaction.guild,

    "🔒 Ticket Closed",

    `User: ${interaction.user}\nChannel: ${interaction.channel}`

  );





  return interaction.reply({

    content: "🔒 Ticket closed. You can delete this ticket now.",

    components: [deleteButton],

  });


};
