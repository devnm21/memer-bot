import 'dotenv/config'
import Discord from 'discord.js'
import memeCommand from './commands/meme'

const commands = [memeCommand.data]

const restInstance = new Discord.REST({ version: '10' }).setToken(process.env.BOT_TOKEN)

const deploy = async () => {
    try {
        await restInstance
        .put(Discord.Routes.applicationCommands(process.env.CLIENT_ID), {
            body: commands,
        })        
        console.log('Commands deployed');
    } catch (error) {
        console.log(error);
    }
}

deploy()