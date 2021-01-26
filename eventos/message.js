const { Message } = require("discord.js")
const db = require("quick.db")
const messageDelete = require("./messageDelete")

module.exports = (client, msg) => {
    const serverID = msg.guild.id
    const prefix = db.fetch(`${serverID}_prefix`)
    if(!prefix) db.set(`${serverID}_prefix`, "m!")
    if(msg.mentions.has(client.user.id)){
        if(msg.content.includes("@here") || msg.content.includes("@everyone")) return
        msg.channel.send(`La prefix actualmente es: ${db.fetch(`${serverID}_prefix`)}`)
    }
    if(!msg.content.startsWith(db.fetch(`${serverID}_prefix`))) return
    if(msg.author.bot) return

    const args = msg.content.slice(db.fetch(`${serverID}_prefix`).length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()

    //Manejando eventos
    let cmd = client.comandos.get(command)
    if(!cmd) return

    // Ejecuta el comando enviando el client, el mensaje y los argumentos.
    cmd(client, msg, args)
}