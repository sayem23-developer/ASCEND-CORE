require("dotenv").config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

// Load Handlers
require("./handlers/commandHandler")(client);
require("./handlers/eventHandler")(client);

client.login(process.env.TOKEN);
