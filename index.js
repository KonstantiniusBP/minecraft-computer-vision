const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    username: 'ai_guy', // username or email, switch if you want to change accounts
    port: 65207,                // only set if you need a port that isn't 25565
})

bot.on('chat', (username, message) => {
    if (username === bot.username) return
    bot.chat(message)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)