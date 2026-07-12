const { EmbedBuilder } = require("discord.js");

const { getGuild } = require("../database");


async function sendTicketLog(guild, title, description) {

  const data = getGuild(guild.id);


  if (!data.ticket || !data.ticket.logsChannelId) {
    return;
  }


  const channel = guild.channels.cache.get(
    data.ticket.logsChannelId
  );


  if (!channel) {
    return;
  }


  const embed = new EmbedBuilder()

    .setTitle(title)

    .setDescription(description)

    .setColor("Blue")

    .setTimestamp();



  await channel.send({
    embeds: [embed],
  });

}


module.exports = {
  sendTicketLog,
};
