const fs = require("fs");

module.exports = {
    name: "ajuda",
    description: "Tu é burro ?",
    execute(msg) {
        const commands = fs.readdirSync(__dirname).filter(file => file.endsWith(".js"));
        let helpMessages = ""; 

        commands.forEach(item => {
            const command = require(__dirname + `/${item}`);
            helpMessages += `\n  **->  ${command.name} ~ ${command.description}**`;

            if(command.paramsDesc) {
                command.paramsDesc.forEach(param => {
                    helpMessages += `\n       ~>  ${param.name} / ${param.description}`;
                });
            }
        });
        msg.channel.send("**Lista de Comandos**" + helpMessages);
    }
}