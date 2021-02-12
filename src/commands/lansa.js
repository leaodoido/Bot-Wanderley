const fetch = require("node-fetch");
const translations = require("../resources/translations.json");

module.exports = {
  name: "lansa",
  description: "Te retorna umas paradas massa (Use a sua imaginação)",
  async execute(msg, args) {
    //checks if the current channel is nsfw
    if (!msg.channel.nsfw) {
      msg.reply(" aqui nao seu degenerado!");
      return;
    }

    //mount url
    let URL = "";

    if (translations[args[0]])
      URL += `https://nekos.life/api/v2/img/${translations[args[0]]}`;
    else URL += `https://nekos.life/api/v2/img/${args[0]}`;

    //request data
    try {
        const res = await fetch(URL);
        const data = await res.json();

        await msg.channel.send(data.url);
    } catch (error) {
      msg.reply(" Ei boy, tem esse nao '-' (tente calango)");
    }
  },
};

