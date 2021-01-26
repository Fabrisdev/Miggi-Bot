const Discord = require("discord.js")
const client = new Discord.Client()
let { readdirSync } = require("fs")

client.config = require("./config.js")
client.comandos = new Discord.Collection()

//CONTROLADOR DE COMANDOS

for(const file of readdirSync("./comandos/")){
    if(file.endsWith(".js")){
        //Elimina los últimos tres caracteres nombre del archivo para
        //deshacerse de la extensión .js y solo quedarnos con el nombre del comando:
        let filename = file.substring(0, file.length - 3)

        //Define una nueva varible 'fileContents' de la exportación del comando 
        //dentro de la carpeta comandos:
        let fileContents = require(`./comandos/${file}`)

        //Agrega el nombre del comando a la colección client.commands con un 
        //valor de sus exportaciones respectivas.
        client.comandos.set(filename, fileContents)
    }
}

//CONTROLADOR DE EVENTOS

for(const file of readdirSync("./eventos/")){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3)
        let fileContents = require(`./eventos/${file}`)

        // Cuando el evento se activa o es solicitada exportamos la función con 
        // el nombre del evento vinculada y tambien el parametro client.
        client.on(fileName, fileContents.bind(null, client))

        // Elimina la memoria caché del archivo requerido para facilitar la recarga y no 
        // tener más memoria de la necesaria.
        delete require.cache[require.resolve(`./eventos/${file}`)]
    }
}

//PROPIEDAD LOGIN

client.login(client.config.token)
    .then(() => {
        const timeH = new Date().getHours()
        const timeM = new Date().getMinutes()
        const timeS = new Date().getSeconds()
        console.log(`[${timeH}:${timeM}:${timeS} INFO]: Miggi ha sido iniciado satisfactoriamente!`)
        console.log(`[${timeH}:${timeM}:${timeS} INFO]: Actualmente se encuentra conectado en: ${client.guilds.cache.size} servidores`)
    })
    .catch((err) => {
        console.log(`[${timeH}:${timeM}:${timeS} INFO]: Error al iniciar sesión: ${err}`)
    })