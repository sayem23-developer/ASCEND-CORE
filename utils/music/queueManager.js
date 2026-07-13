class QueueManager {
  constructor() {
    this.queues = new Map();
  }

  get(guildId) {
    return this.queues.get(guildId);
  }

  set(guildId, queue) {
    this.queues.set(guildId, queue);
  }

  delete(guildId) {
    this.queues.delete(guildId);
  }

  has(guildId) {
    return this.queues.has(guildId);
  }
}

module.exports = new QueueManager();
