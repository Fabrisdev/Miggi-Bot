module.exports = (client,msg,args) => {
    if(!msg.guild) return
    const Discord = require("discord.js")
    const embedDatos = new Discord.MessageEmbed()
                .setTitle("Este es su título, puede contener 256 caracteres")
                .setAuthor(msg.author.username, msg.author.displayAvatarURL())
                .setColor(0x00AE86)
                .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
                .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL())
                .setImage(msg.author.displayAvatarURL())
                .setThumbnail(msg.author.displayAvatarURL())
                .setTimestamp()
                .setURL("https://github.com/fabridora")
                .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
                .addField("Campo en línea", "Debajo del campo en línea",  true)
                .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true)
            msg.channel.send({embed: embedDatos})
}