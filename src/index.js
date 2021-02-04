require("dotenv").config();

const Discord       = require("discord.js"),
      fs            = require("fs"),
      { prefix }    = require("./config.json");

//client setup
const client = new Discord.Client();
client.commands = new Discord.Collection();

//require command files
const commandFiles = fs.readdirSync(__dirname + "/commands")
    .filter(command => command.endsWith(".js"));

//requires and add commands to client 
commandFiles.forEach(file => {
    const command = require(`${__dirname}/commands/${file}`);
    client.commands.set(command.name, command);
});

//handle messages
client.on("message", msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const options = msg.content.slice(prefix.length).trim().split(" ");
    const command = options.shift().toLowerCase();

    try {
        client.commands.get(command).execute(msg, options);
    } catch(err) {
        msg.reply("** Tu sabe ler, gld ?**");
    }
});

client.on("ready", () => 
    console.log("Pronto.")
);

client.login(process.env.DISCORD_BOT_TOKEN);