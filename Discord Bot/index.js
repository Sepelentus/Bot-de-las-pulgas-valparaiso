import { configDotenv } from "dotenv"; // Aqui se importa la config desde .env //

configDotenv()

import { Client, Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js"; // Imports de la api de Discord //

const client = new Client({                     // Las intents son las interacciones que va a utilizar el bot //
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages
    ],
});

client.once(Events.ClientReady, c=> {           // Esto solo pasa una vez, por ejemplo cuando se inicia sesion el bot, cuando se coloca => es como darle el nombre de una variable a una accion //
    console.log(`Logged in as ${c.user.tag}`);

    const sixto = new SlashCommandBuilder()     // Hace un constructor de los comandos de slash //
    .setName('sixto')                           // Le establece un nombre a la interaccion del slash //
    .setDescription('Responde con factores')    // Establece una descripcion sobre la accion que hara el comando //

    client.application.commands.create(sixto, "366409218972188702");
});

client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;   
    if(interaction.commandName === "sixto"){    // Si la interaccion corresponde al comando sixto, responde matate //
        interaction.reply("matate")
    }
    console.log(interaction);
});

client.login(process.env.DISCORD_TOKEN);

