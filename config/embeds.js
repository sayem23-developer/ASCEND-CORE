const { EmbedBuilder } = require("discord.js");
const colors = require("./colors");
const bot = require("./bot");

function createEmbed(title, description) {
  return new EmbedBuilder()
    .setColor(colors.PRIMARY)
    .setTitle(title)
    .setDescription(description)
    .setFooter({
      text: bot.FOOTER,
    })
    .setTimestamp();
}

module.exports = {
  createEmbed,
};
