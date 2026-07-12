const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "database", "guilds.json");

function loadDatabase() {
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, "{}");
  }

  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
}

function saveDatabase(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

function getGuild(id) {
  const db = loadDatabase();

  if (!db[id]) {
    db[id] = {};
    saveDatabase(db);
  }

  return db[id];
}

function saveGuild(id, data) {
  const db = loadDatabase();

  db[id] = data;

  saveDatabase(db);
}

module.exports = {
  loadDatabase,
  saveDatabase,
  getGuild,
  saveGuild,
};
