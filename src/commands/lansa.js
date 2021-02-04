const https = require("https");
const translations = require("./translations.json");

module.exports = {
    name:"lansa",
    description: "Te retorna umas paradas massa (Use a sua imaginação)",
    execute(msg, args) {
        //checks if the current channel is nsfw
        if(!msg.channel.nsfw) {
            msg.reply(" aqui nao seu degenerado!");
            return;
        }
        
        //mount url
        let URL = "";

        if(translations[args[0]])
            URL += `https://nekos.life/api/v2/img/${translations[args[0]]}`;
        else
            URL += `https://nekos.life/api/v2/img/${args[0]}`;

        //request data
        https.get(URL, (res) => {
            let reqData = "";
            res
                .on("data", data => {
                    reqData += data;
                })
                .on("end", () => {
                    const parsedData = JSON.parse(reqData);
                    msg.channel.send(parsedData.url);
                })
                .on("error", (err) => console.error(err));
        });
    }
}