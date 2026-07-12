const { EmbedBuilder } = require("discord.js");
const { getGuild } = require("../utils/database");

module.exports = {
  name: "guildMemberAdd",

  async execute(member) {

    const data = getGuild(member.guild.id);

    if (!data.welcome || !data.welcome.channelId) return;

    const channel = member.guild.channels.cache.get(data.welcome.channelId);

    if (!channel) return;

    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("👋 Welcome to ASCEND CORE")
      .setDescription(
        `Welcome <@${member.id}>!\n\n🎉 You are member #${member.guild.memberCount}`
      )
      .setThumbnail(member.user.displayAvatarURL({ size: 256 }))
      .setFooter({
        text: `${member.user.username} joined the server`,
      })
      .setTimestamp();

    await channel.send({
      content: `🎉 Welcome <@${member.id}>!`,
      embeds: [embed],
    });

  },
};
