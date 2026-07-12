module.exports = {
  name: "clientReady",
  once: true,

  async execute(client) {
    console.log(`✅ ${client.user.tag} is now online!`);
    client.user.setActivity("ASCEND Community", {
      type: 3, // Watching
    });
  },
};
