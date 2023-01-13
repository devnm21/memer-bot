import 'dotenv/config';
import Discord from 'discord.js'
import express  from 'express'
import bodyParser from 'body-parser'
import bot from './lib/discord-client';

const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())



app.listen(5005, () => {
    console.log('server is running');
})

bot.on(Discord.Events.InteractionCreate, async (interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName)
        if (command) {
            await command.execute(interaction)
        }
    }
})
