const { Message } = require("discord.js")

module.exports = (client, msg) => {
    if(!msg.content.startsWith(client.config.prefix)) return
    if(msg.author.bot) return

    const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);  
    const command = args.shift().toLowerCase()

    //Manejando eventos
    let cmd = client.comandos.get(command)
    if(!cmd) return

    // Ejecuta el comando enviando el client, el mensaje y los argumentos.
    cmd(client, msg, args)
}