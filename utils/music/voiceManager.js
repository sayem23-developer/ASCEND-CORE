const {
  joinVoiceChannel,
  createAudioPlayer,
  NoSubscriberBehavior,
} = require("@discordjs/voice");

class VoiceManager {
  join(channel) {
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });

    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      },
    });

    connection.subscribe(player);

    return {
      connection,
      player,
    };
  }
}

module.exports = new VoiceManager();
