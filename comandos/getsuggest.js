module.exports = (client, msg, args) => {
    const db = require("quick.db")
    const numb = args[0]
    const text = db.fetch(`suggests_${numb}_text`)
    msg.channel.send(`Sugerencia numero: #${numb}`)
    msg.channel.send(text)
}