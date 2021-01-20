module.exports = (client, member) => {
    const Discord = require("discord.js")
    const canal = client.channels.cache.get("801031185588289556")
    canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} Pasala bien :)`)
    const embedUserImage = new Discord.MessageEmbed()
        .setTitle(`¡Bienvenido ${member.user.tag}!`)
        .setColor(4842276)
        .setImage(member.user.displayAvatarURL())
        .setFooter(`Ya somos ${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, member.user.avatarURL())
        .setTimestamp()
    canal.send(embedUserImage)
}