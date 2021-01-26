module.exports = (client,msg,args) => {
    const db = require("quick.db")
    const serverID = msg.guild.id
    const prefix = db.fetch(`${serverID}_prefix`)
    msg.channel.send(`La prefix es: ${prefix}`)
}