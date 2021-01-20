module.exports = (client, member) => {
    const canal = client.channels.cache.get("801031185588289556")
    canal.send(`${member.user.tag} ha abandonado el servidor :(`)
}