module.exports = (client, msg, args) => {
    const db = require("quick.db")
    let user = msg.author
    let dinero = "20"
    db.add(`balance_${user.id}`, dinero)
    msg.channel.send("Has obtenido $"+dinero)
}