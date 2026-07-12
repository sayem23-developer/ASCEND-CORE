const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Shows information about a user.")
    .addUserOption(option =>
      option
        .setName("member")
        .setDescription("Select a user")
        .setRequired(false)
    ),

  async execute(interaction) {
    const member =
      interaction.options.getMember("member") || interaction.member;

    const user = member.user;

    const embed = new EmbedBuilder()
      .setColor("#5865F2")
      .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
      })
      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 1024 }))
      .addFields(
        {
          name: "👤 Username",
          value: user.username,
          inline: true,
        },
        {
          name: "🆔 User ID",
          value: user.id,
          inline: true,
        },
        {
          name: "🤖 Bot",
          value: user.bot ? "Yes" : "No",
          inline: true,
        },
        {
          name: "📅 Account Created",
          value: `<t:${Math.floor(user.createdTimestamp / 1000)}:F>`,
        },
        {
          name: "📥 Joined Server",
          value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>`,
        },
        {
          name: "🎭 Highest Role",
          value: `${member.roles.highest}`,
        }
      )
      .setFooter({
        text: "ASCEND CORE v3",
      })
      .setTimestamp();

    await interaction.reply({
      embeds: [embed],
    });
  },
};
