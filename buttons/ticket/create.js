const {
  ChannelType,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { getGuild } = require("../../utils/database");
const { sendTicketLog } = require("../../utils/logs/ticketLog");


module.exports = async (interaction) => {


  const data = getGuild(interaction.guild.id);


  if (!data.ticket || !data.ticket.categoryId) {

    return interaction.reply({
      content: "❌ Ticket category is not configured.",
      flags: 64,
    });

  }



  const category = interaction.guild.channels.cache.get(
    data.ticket.categoryId
  );


  if (!category) {

    return interaction.reply({
      content: "❌ Ticket category not found.",
      flags: 64,
    });

  }




  const existing = interaction.guild.channels.cache.find(
    c => c.name === `ticket-${interaction.user.username}`
  );


  if (existing) {

    return interaction.reply({
      content: `❌ You already have a ticket: ${existing}`,
      flags: 64,
    });

  }




  const ticketChannel = await interaction.guild.channels.create({

    name: `ticket-${interaction.user.username}`,

    type: ChannelType.GuildText,

    parent: category.id,


    permissionOverwrites: [

      {
        id: interaction.guild.id,

        deny: [
          PermissionFlagsBits.ViewChannel,
        ],

      },


      {
        id: interaction.user.id,

        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
        ],

      },

    ],

  });





  const closeButton = new ActionRowBuilder()
    .addComponents(

      new ButtonBuilder()

        .setCustomId("close_ticket")

        .setLabel("Close Ticket")

        .setEmoji("🔒")

        .setStyle(ButtonStyle.Danger)

    );





  await ticketChannel.send({

    content: `🎫 Welcome ${interaction.user}\n\nSupport team will assist you soon.`,

    components: [closeButton],

  });





  await sendTicketLog(
    interaction.guild,
    "🎫 Ticket Created",
    `User: ${interaction.user}\nChannel: ${ticketChannel}`
  );





  return interaction.reply({

    content: `✅ Ticket created: ${ticketChannel}`,

    flags: 64,

  });


};
