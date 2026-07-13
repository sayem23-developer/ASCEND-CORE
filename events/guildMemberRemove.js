const { getGuild } = require("../utils/database");

module.exports = {
  name: "guildMemberRemove",

  async execute(member) {
    const data = getGuild(member.guild.id);

    if (!data.goodbye || !data.goodbye.channelId) return;

    const channel = member.guild.channels.cache.get(data.goodbye.channelId);

    if (!channel) return;

    const message =
      data.goodbye.message ||
      `👋 Goodbye ${member.user.tag}!\nWe hope to see you again.`;

    await channel.send({
      content: message
        .replace("{user}", member.user.tag)
        .replace("{mention}", `<@${member.id}>`)
        .replace("{server}", member.guild.name),
    });
  },
};
