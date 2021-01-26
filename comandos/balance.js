module.exports = (client, msg, args) => {
    const db = require("quick.db")
    let user = msg.author

    let dinero = db.fetch(`balance_${user.id}`)
    msg.channel.send("Tienes $"+dinero)
}