const verifySetup = require("../buttons/setup/verify");
const ticketSetup = require("../buttons/setup/ticket");
const welcomeSetup = require("../buttons/setup/welcome");

const channelMenu = require("../selectmenus/setup/channel");
const roleMenu = require("../selectmenus/setup/role");
const categoryMenu = require("../selectmenus/setup/category");
const ticketLogsMenu = require("../selectmenus/setup/ticketLogs");
const staffRoleMenu = require("../selectmenus/setup/staffRole");

const panelSend = require("../buttons/setup/panel");
const ticketPanel = require("../buttons/setup/ticketPanel");

const verifyMember = require("../buttons/verify/verify");

const createTicket = require("../buttons/ticket/create");
const closeTicket = require("../buttons/ticket/close");
const deleteTicket = require("../buttons/ticket/delete");

const { getGuild, saveGuild } = require("../utils/database");


module.exports = {
  name: "interactionCreate",

  async execute(interaction, client) {


    // Slash Commands
    if (interaction.isChatInputCommand()) {

      const command = client.commands.get(interaction.commandName);

      if (!command) return;


      try {

        await command.execute(interaction, client);

      } catch (error) {

        console.error(error);

        if (!interaction.replied && !interaction.deferred) {

          await interaction.reply({
            content: "❌ Error occurred.",
            flags: 64,
          });

        }

      }

      return;
    }




    // Buttons
    if (interaction.isButton()) {


      console.log("Button Click:", interaction.customId);


      switch (interaction.customId) {


        case "setup_verify":
          return verifySetup(interaction);


        case "setup_ticket":
          return ticketSetup(interaction);


        case "setup_welcome":
          return welcomeSetup(interaction);



        // Verification

        case "verify_channel":
          return channelMenu(interaction);


        case "verify_role":
          return roleMenu(interaction);


        case "verify_panel":
          return panelSend(interaction);


        case "verify_member":
          return verifyMember(interaction);



        // Ticket Setup

        case "ticket_category":
          return categoryMenu(interaction);


        case "ticket_logs":
          return ticketLogsMenu(interaction);


        case "ticket_staff":
          return staffRoleMenu(interaction);


        case "ticket_panel":
          return ticketPanel(interaction);



        // Ticket System

        case "create_ticket":
          return createTicket(interaction);


        case "close_ticket":
          return closeTicket(interaction);


        case "delete_ticket":
          return deleteTicket(interaction);



        default:

          return interaction.reply({
            content: "🚧 Unknown button.",
            flags: 64,
          });

      }

    }




    // Channel Select Menu

    if (interaction.isChannelSelectMenu()) {


      if (interaction.customId === "verify_channel_select") {


        const channel = interaction.channels.first();

        const data = getGuild(interaction.guild.id);


        data.verification = {
          ...(data.verification || {}),
          channelId: channel.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Verification channel saved: ${channel}`,
          flags: 64
        });

      }





      if (interaction.customId === "ticket_category_select") {


        const category = interaction.channels.first();

        const data = getGuild(interaction.guild.id);


        data.ticket = {
          ...(data.ticket || {}),
          categoryId: category.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Ticket category saved: ${category.name}`,
          flags: 64
        });

      }





      if (interaction.customId === "ticket_logs_select") {


        const channel = interaction.channels.first();

        const data = getGuild(interaction.guild.id);


        data.ticket = {
          ...(data.ticket || {}),
          logsChannelId: channel.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Ticket logs saved: ${channel}`,
          flags: 64
        });

      }





      if (interaction.customId === "welcome_channel_select") {


        const channel = interaction.channels.first();

        const data = getGuild(interaction.guild.id);


        data.welcome = {
          ...(data.welcome || {}),
          channelId: channel.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Welcome channel saved: ${channel}`,
          flags: 64
        });

      }

    }





    // Role Select Menu

    if (interaction.isRoleSelectMenu()) {



      if (interaction.customId === "verify_role_select") {


        const role = interaction.roles.first();

        const data = getGuild(interaction.guild.id);


        data.verification = {
          ...(data.verification || {}),
          roleId: role.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Verification role saved: ${role}`,
          flags: 64
        });

      }





      if (interaction.customId === "ticket_staff_select") {


        const role = interaction.roles.first();

        const data = getGuild(interaction.guild.id);


        data.ticket = {
          ...(data.ticket || {}),
          staffRoleId: role.id
        };


        saveGuild(interaction.guild.id, data);


        return interaction.reply({
          content: `✅ Ticket staff role saved: ${role}`,
          flags: 64
        });

      }

    }


  },
};
