const embed = require("../comandos/embed")

module.exports = async (client, message) => {
    const Discord = require("discord.js")
    const canal = client.channels.cache.get("801032380093431839")
    if(!message.guild) return

    const fetchedLogs = await message.guild.fetchAuditLogs({
        limit: 1,
        type: "MESSAGE_DELETE"
    })
    const deletionLog = fetchedLogs.entries.first()

    if(!deletionLog){
        const embedMessage = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle(`Mensaje de ${message.author.tag} borrado:`)
            .addFields(
                { name: "Contenido:", value: message },
                { name: "Borrado por:", value: "No se pudo encontrar el usuario" },
                { name: "Fecha:", value: new Date()},
            )  
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL())
        if(embedMessage.length <= 1024) canal.send(embedMessage)
    }

    const { executor, target } = deletionLog

    if(target.id === message.author.id){
        const embedMessage = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle(`Mensaje de ${message.author.tag} borrado:`)
            .addFields(
                { name: "Contenido:", value: message },
                { name: "Borrado por:", value: executor.tag },
                { name: "Fecha:", value: new Date()},
            )  
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL())
        if(embedMessage.length <= 1024) canal.send(embedMessage)
    }else{
        const embedMessage = new Discord.MessageEmbed()
            .setColor(3447003)
            .setTitle(`Mensaje de ${message.author.tag} borrado:`)
            .addFields(
                { name: "Contenido:", value: message },
                { name: "Borrado por:", value: "No se pudo encontrar el usuario" },
                { name: "Fecha:", value: new Date()},
            )  
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL())
        if(embedMessage.length <= 1024) canal.send(embedMessage)
    }
}
