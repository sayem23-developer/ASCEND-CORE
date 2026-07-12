const { getGuild } = require("../../utils/database");

module.exports = async (interaction) => {

  const data = getGuild(interaction.guild.id);

  if (!data.verification || !data.verification.roleId) {

    return interaction.reply({
      content: "❌ Verification role is not configured.",
      ephemeral: true,
    });

  }


  const role = interaction.guild.roles.cache.get(
    data.verification.roleId
  );


  if (!role) {

    return interaction.reply({
      content: "❌ Role not found.",
      ephemeral: true,
    });

  }


  await interaction.member.roles.add(role);


  return interaction.reply({
    content: "✅ Verification complete! You received the role.",
    ephemeral: true,
  });

};
