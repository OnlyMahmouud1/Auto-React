const express = require('express');

const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const {userAccount} = require("sphinx-run");
const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({ checkUpdate: false });
new userAccount(client, Discord).autoReaction({
channel: "ايدي الروم الي الحساب هيرسل فيها انة شارك في الجيف اوي",
user: "ايدي الحساب",
timeout: 10000,
blacklistedwords: ["tokens", "auto"]
})

client.login(process.env.token)
