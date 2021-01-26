module.exports = (client,msg,args) => {
    const Discord = require("discord.js")
    const db = require("quick.db")
    const canal = client.channels.cache.get("801364238362345482")
    const serverID = msg.guild.id
    const suggestid = args[0]
    const approved = args[1]
    const text = db.fetch(`${serverID}_suggests_${suggestid}_text`)
    const reason = args.slice(2).join(" ")
    const username = db.fetch(`${serverID}_suggests_${suggestid}_username`)
    const usernameAvatar = db.fetch(`${serverID}_suggests_${suggestid}_usernameAvatar`)
    const suggestVoted = db.fetch(`${serverID}_suggests_${suggestid}_finished`)

    if(args.length >= 3){
        if(text){
            if(!suggestVoted){
                if(reason){
                    if(approved === "y"){
                        const embedMessage = new Discord.MessageEmbed()
                            .setColor(3447003)
                            .setTitle(`Sugerencia aprobada #${suggestid}:`)
                            .setAuthor(username, usernameAvatar.toString())
                            .setDescription(text)
                            .addFields(
                                {name: `Razón de ${msg.author.tag}`, value: reason}
                            )
                            .setTimestamp()
                        canal.send(embedMessage)
                        db.push(`suggests_${suggestid}_finished`, true)
                    }else if(approved === "n"){
                        const embedMessage = new Discord.MessageEmbed()
                            .setColor(3447003)
                            .setTitle(`Sugerencia rechazada #${suggestid}:`)
                            .setAuthor(username, usernameAvatar.toString())
                            .setDescription(text)
                            .addFields(
                                {name: `Razón de ${msg.author.tag}`, value: reason}
                            )
                            .setTimestamp()
                        canal.send(embedMessage)
                        db.push(`${serverID}_suggests_${suggestid}_finished`, true)
                    }else{
                        msg.channel.send({embed: {
                            color: 16777073,
                            description: "**Argumentos no validos!** EX: m!setsuggest {id} {y/n} {razón}"
                        }})
                    }
                }else{
                    msg.channel.send({embed: {
                        color: 16777073,
                        description: "**Argumentos no validos!** EX: m!setsuggest {id} {y/n} {razón}"
                    }})
                }
            }else{
                msg.channel.send({embed: {
                    color: 16777073,
                    description: "**ERROR!** Esta sugerencia ya ha sido aprobada/rechazada anteriormente."
                }})
            }
        }else{
            msg.channel.send({embed: {
                color: 16777073,
                description: "**ERROR!** Esa sugerencia no existe."
            }})
        }
    }else{
        msg.channel.send({embed: {
            color: 16777073,
            description: "**Argumentos no validos!** EX: m!setsuggest {id} {y/n} {razón}"
        }})
    }
}