module.exports = {
    name:"divida",
    description: "Mostrara qual a sua divida com o borracheiro paulo",
    paramsDesc: [
        {
            name: "+",
            description:"Aumentara em 1 cu a divida com paulao"
        },
        {
            name: "-",
            description:"Subtraira em 1 cu a divida com paulao"
        }
    ],
    qtd: 0,
    execute(msg, args) {
        if (args[0] === "+")
            this.qtd++;
        else if (args[0] === "-")
            this.qtd--;
        else
            msg.reply(` voce tem uma divida de ${this.qtd} cus com o paulão`);
    }
}