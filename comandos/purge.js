module.exports = (client, msg, args) => {
    const amount = parseInt(args[0]) || 0
        if(amount <= 0){
            return msg.channel.send({embed: {
                color: 16777073,
                description: "**Argumentos no validos o has ingresado un valor menor a 1!** EX: m!purge {numero}"
            }})
        }
        msg.channel.bulkDelete(amount)
}