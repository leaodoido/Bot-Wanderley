module.exports = {
    name:"pingola",
    description: "Avalia o tamanho de sua pingola ao vivo",
    execute(msg) {
        const length = Math.floor(Math.random() * 100);
        msg.reply(` voce tem ${length} cm de pingola`);
    }
}