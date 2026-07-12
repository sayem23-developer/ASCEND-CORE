require("dotenv").config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const express = require("express");

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

// Render Web Service Port
const app = express();

app.get("/", (req, res) => {
  res.send("ASCEND BOT is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

// Login Discord Bot
client.login(process.env.TOKEN);
