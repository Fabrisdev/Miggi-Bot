module.exports = (client, message) => {
    const canal = client.channels.cache.get("801032380093431839")
    canal.send(`${message.author.tag} eliminó un mensaje con el contenido: ${message}`)
}