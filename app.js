// Dependencies
const Discord = require('discord.js');
const client = new Discord.Client();

// Check status
client.on('presenceUpdate', (oldMember, newMember) => {
    console.log(oldMember, newMember);
});

// Login to discord api
client.login(process.env.token);
