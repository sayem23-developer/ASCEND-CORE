const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { getGuild } = require("../../utils/database");


module.exports = async (interaction) => {

  const data = getGuild(interaction.guild.id);


  if (!data.ticket || !data.ticket.logsChannelId) {

    return interaction.reply({
      content: "❌ Ticket logs channel is not set.",
      flags: 64,
    });

  }


  const channel = interaction.guild.channels.cache.get(
    data.ticket.logsChannelId
  );


  if (!channel) {

    return interaction.reply({
      content: "❌ Ticket panel channel not found.",
      flags: 64,
    });

  }



  const embed = new EmbedBuilder()

    .setTitle("🎫 ASCEND CORE Ticket System")

    .setDescription(
      "Need help?\n\n" +
      "Click the button below to create a ticket."
    )

    .setColor("Blue");



  const row = new ActionRowBuilder()

    .addComponents(

      new ButtonBuilder()

        .setCustomId("create_ticket")

        .setLabel("Create Ticket")

        .setEmoji("🎫")

        .setStyle(ButtonStyle.Primary)

    );



  await channel.send({

    embeds: [embed],

    components: [row],

  });



  return interaction.reply({

    content: `✅ Ticket panel sent to ${channel}`,

    flags: 64,

  });


};
