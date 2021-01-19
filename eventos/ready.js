module.exports = (client) => {
    client.user.setPresence({
        status: "online",
        name: `m!help - Siendo útil en ${client.guilds.cache.size} servidores!`,
        type: "WATCHING"
    })
}