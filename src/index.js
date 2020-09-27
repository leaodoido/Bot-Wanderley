require("dotenv").config();

const Discord       = require("discord.js"),
      { prefix }    = require("./config.json");

const client = new Discord.Client();

client.on("message", msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    msg.channel.send("Olá :)");
});

client.on("ready", () => 
    console.log("Pronto.")
);

client.login(process.env.DISCORD_BOT_TOKEN);