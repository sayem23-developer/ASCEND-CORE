require("dotenv").config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const DiscordStrategy = require("passport-discord").Strategy;


// Discord Bot
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


// Express Dashboard
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/dashboard/views");

app.use(express.static(__dirname + "/dashboard/public"));


// Session
app.use(session({
  secret: "ascend_dashboard_secret",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Discord OAuth2
passport.use(new DiscordStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.REDIRECT_URI,
  scope: ["identify"]
},
(accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


// Home
app.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("dashboard", {
      user: req.user,
      client: client
    });
  }
res.render("login");
});

app.get("/botinfo", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  res.render("botinfo", {
    user: req.user,
    client: client
  });
});
app.get("/setup", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }

  res.render("setup", {
    user: req.user,
    client: client
  });
});

 


// Login
app.get("/auth/discord",
  passport.authenticate("discord")
);


// Callback
app.get("/auth/discord/callback",
  passport.authenticate("discord", {
    failureRedirect: "/"
  }),
  (req, res) => {
    res.redirect("/");
  }
);


// Logout
app.get("/logout", (req, res) => {
  req.logout(() => {});
  res.redirect("/");
});


// Start Web
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});


// Start Bot
client.login(process.env.TOKEN);
