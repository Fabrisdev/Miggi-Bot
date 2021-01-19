module.exports = (client,msg,args) => {
    const Discord = require("discord.js")
    const usuario = msg.mentions.users.first()
        if(!usuario){
            if(args.length >= 1){
                return msg.channel.send({embed: {
                    color: 16777073,
                    description: "**Argumentos no validos!** EX: m!avatar {usuario}"
                }})
            }
            const embedProfile = new Discord.MessageEmbed()
            .setTitle("Avatar de "+msg.author.tag)
            .setColor(16777073)
            .setImage(msg.author.displayAvatarURL())
            .setFooter(`Avatar de ${msg.author.tag}`, msg.author.avatarURL())
            .setTimestamp()
            msg.channel.send(embedProfile)
        }else{
            if(args.length >= 2){
                return msg.channel.send({embed: {
                    color: 16777073,
                    description: "**Argumentos no validos!** EX: m!avatar {usuario}"
                }})
            }
            const embedProfile = new Discord.MessageEmbed()
            .setTitle("Avatar de "+usuario.tag)
            .setColor(16777073)
            .setImage(usuario.displayAvatarURL())
            .setFooter(`Avatar de ${usuario.tag}`, usuario.avatarURL())
            .setTimestamp()
            msg.channel.send(embedProfile)
        }
}