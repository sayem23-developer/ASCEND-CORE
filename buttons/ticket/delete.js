const { sendTicketLog } = require("../../utils/logs/ticketLog");


module.exports = async (interaction) => {


  if (!interaction.channel.name.startsWith("ticket-")) {

    return interaction.reply({

      content: "❌ This is not a ticket channel.",

      flags: 64,

    });

  }




  await sendTicketLog(

    interaction.guild,

    "🗑️ Ticket Deleted",

    `User: ${interaction.user}\nChannel: ${interaction.channel.name}`

  );





  await interaction.reply({

    content: "🗑️ Ticket will be deleted in 5 seconds.",

    flags: 64,

  });





  setTimeout(() => {


    interaction.channel.delete()

      .catch(console.error);


  }, 5000);


};
