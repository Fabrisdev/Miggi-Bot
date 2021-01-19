module.exports = (client,msg,args) => {
    let chan = msg.mentions.channels.first()
        if(!chan){
            if(args.length >= 1){
                let text = args.join(" ")
                return msg.channel.send({embed: {
                    color: 16777073,
                    description: text
                }})
            }
        }
        if(args.length === 0){
            return msg.channel.send({embed: {
                color: 16777073,
                description: "**Argumentos insuficientes!** EX: m!say {canal} [mensaje]"
            }})
        }
        let text = args.slice(1).join(" ")
        if(!text){
            return msg.channel.send({embed: {
                color: 16777073,
                description: "**Argumentos insuficientes!** EX: m!say {canal} [mensaje]"
            }})
        }
        client.channels.cache.get(chan.id).send({embed: {
            color: 16777073,
            description: text
        }})
}