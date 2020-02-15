// Dependencies
const Discord = require('discord.js');
const client = new Discord.Client();
const role = require('./lib/role');

// Perform startup actions
client.on('ready', () => {
    role.init(client);
});

// User's status was updated
client.on('presenceUpdate', (old, member) => {
    role.update(old, member);
});

// Login to discord api
client.login(process.env.token);
