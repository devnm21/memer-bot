import axios from 'axios'
import Discord from 'discord.js'

const memeCommand = new Discord.SlashCommandBuilder()

memeCommand.setName('meme') // -> we can all the bot with "/meme"
memeCommand.setDescription('Sends Meme') // -> we can all the bot with "/meme"

const memeCommandInteraction = async (interaction) => {
    await interaction.reply('Generating a meme for you...')
    const res = await axios('https://meme-api.com/gimme')
    console.log('Meme response', res.data);
    const embed = new Discord.EmbedBuilder()
    embed.setTitle('Meme')
    embed.setImage(res.data.url)
    console.log(interaction);
    await interaction.editReply({
        embeds: [embed]
    })
}

export default {
    data: memeCommand,
    execute: memeCommandInteraction,
}