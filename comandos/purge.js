module.exports = (client, msg, args) => {
    if(!msg.guild) return
    const amount = parseInt(args[0]) || 0
    if(amount <= 0 || amount > 100){
        return msg.channel.send({embed: {
            color: 16777073,
            description: "**Argumentos no validos o has ingresado un valor menor a 1 o mayor a 100!** EX: m!purge {numero}"
        }})
    }
    msg.channel.bulkDelete(amount)
    msg.channel.send(`Listo! ${amount} mensajes han sido borrados correctamente`)
        .then((m) => {
            setTimeout(() => {
                if(!m.deleted) m.delete()
            }, 3000)
        })
}