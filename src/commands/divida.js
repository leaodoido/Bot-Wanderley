var qnt = 0;
module.exports = {
    name:"divida",
    description: "mostrara qual a sua divida com o borracheiro",   
    execute(msg) {
	qnt = qnt + 1;
      	msg.reply(` voce tem uma divida de ${qnt} cus com o paulão`);
    }
}