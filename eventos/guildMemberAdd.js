module.exports = (member) => {
    const canal = client.channels.cache.get("801031185588289556")
    canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} Pasala bien :)`)
}