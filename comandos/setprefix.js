module.exports = (client,msg,args) => {
    if(!msg.guild) return
    const serverID = msg.guild.id
    const db = require("quick.db")
    const newPrefix = args[0]

    if(newPrefix){
        db.set(`${serverID}_prefix`, newPrefix)
        const prefix = db.fetch(`${serverID}_prefix`)
        msg.channel.send(`La nueva prefix es: ${prefix}`)
    }else{
        msg.channel.send("ERROR! Inserta una nueva prefix por favor")
    }
}