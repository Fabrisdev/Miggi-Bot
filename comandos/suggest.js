module.exports = (client,msg,args) => {
    if(!msg.guild) return
    const Discord = require("discord.js")
    const db = require("quick.db")
    const serverID = msg.guild.id
    const canal = client.channels.cache.get("801364238362345482")
    const text = args.join(" ")

    db.add(`${serverID}_suggests_count`, 1)
    const count = db.fetch(`${serverID}_suggests_count`)
    db.push(`${serverID}_suggests_${count}_text`, text)
    //get username, tag and put them in the database
    const username = msg.author.tag
    db.push(`${serverID}_suggests_${count}_username`, username)
    //get user avatarURL and put them in the database
    const usernameAvatar = msg.author.displayAvatarURL()
    db.push(`${serverID}_suggests_${count}_usernameAvatar`, usernameAvatar)

    const embedMessage = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle(`Sugerencia #${count}:`)
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL())
        .setDescription(text)
        .setTimestamp()
    canal.send(embedMessage)
}