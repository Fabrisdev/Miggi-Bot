module.exports = (client) => {
    client.user.setPresence({
        status: "online",
        name: `m!help - Siendo útil en ${client.guilds.cache.size} servidores!`,
        type: "WATCHING"
    })
/*
    const canal = client.channels.cache.get("802989267479560192")
    const Discord = require("discord.js")
    canal.send("@everyone")
    const embedUpdate = new Discord.MessageEmbed()
        .setAuthor("¡Nueva actualización! V0.1", client.user.displayAvatarURL())
        .setTitle("¡Miggi se ha actualizado!")
        .setColor(0x00AE86)
        .setDescription("Miggi ha sido actualizado. Haz click en el mensaje para ir a la pagina de GitHub para ver los cambios, o continua leyendo abajo.")
        .setThumbnail("https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png")
        .setTimestamp()
        .setURL("https://github.com/fabridora/Miggi-Bot")
        .addField("Nuevo:", "-Mensaje al actualizar el bot\n- Comando suggest y setsuggest\n- Hora mostrada al iniciar el bot", true)
        .addField("Arreglado:", "- Varios bugs de purge (Gracias Ticua!)\n", true)
        .addField("Removido:", "- Comandos de prueba para la nueva database (cm & balance)", true)
        .setFooter("¡Clickea en el mensaje para ir al GitHub!", client.user.avatarURL())
    canal.send({embed: embedUpdate})
        .then(m => {
            m.react("👍")
        })
*/
}