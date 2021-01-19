module.exports = (member) => {
    const canal = client.channels.cache.get("801031185588289556")
    canal.send(`${member.user} ha abandonado el servidor :(`)
}