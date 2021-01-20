module.exports = (client, msg, args) => {
    if(!msg.guild) return
    msg.channel.send({embed: {
        color: 16777073,
        description: "Revisando el ping.."
    }}).then(m => {
        const ping = m.createdTimestamp - msg.createdTimestamp
        m.delete()
        msg.channel.send({embed: {
            color: 16777073,
            description: `Tu ping actualmente es: ${ping}ms` 
        }})
    })
}