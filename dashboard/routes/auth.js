const express = require("express");
const router = express.Router();

router.get("/discord", (req, res) => {
  const url =
    "https://discord.com/oauth2/authorize" +
    `?client_id=${process.env.CLIENT_ID}` +
    "&response_type=code" +
    "&redirect_uri=" +
    encodeURIComponent(process.env.CALLBACK_URL) +
    "&scope=identify%20guilds";

  res.redirect(url);
});

router.get("/discord/callback", (req, res) => {
  res.send("Discord Login Callback Working!");
});

module.exports = router;
