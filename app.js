// Dependencies
const Discord = require('discord.js');
const client = new Discord.Client();

// Check if we're added to the server.
client.on('ready', () => {
    let guild = client.guilds.get(process.env.guild);
    // If we're added to the server, check if the roll exists.
    if (guild) {
        if (!guild.roles.find(role => role.name === "Playing Apex")) {
            // Add the roll to the server.
            guild.createRole({
                hoist: true,
                name: 'Playing Apex',
            }).then(role => {
                process.env.roleID = role.id;
            }).catch(error => {
                if (error == 'DiscordAPIError: Missing Permissions') {
                    console.error('Please give the bot Administrator privileges and restart.');
                }
            });
        } else {
            process.env.roleID = guild.roles.find(role => role.name === 'Playing Apex').id;
        }
    } else {
        console.error('Please add the bot to your server and restart.');
    }
    // Set our status
    client.user.setPresence({game: {name: 'Apex Legends'}, status: 'online'});

    // Check all users to see if anyone was playing before we started the bot.
    guild.members.forEach((member) => {
        // Check if they started playing a game
        if (member.presence.game) {
            // Check if the game is Apex Legends
            if (member.presence.game.name === 'Apex Legends') {
                // Give them the Playing Apex role
                member.addRole(process.env.roleID);
            }
        }
    });
});

// Check status
client.on('presenceUpdate', (old, member) => {
    // Check if they started playing a game
    if (member.presence.game) {
        // Check if the game is Apex Legends
        if (member.presence.game.name === 'Apex Legends') {
            // Give them the Playing Apex role
            member.addRole(process.env.roleID);
        }
    }
    // Check if they stopped playing a game
    if (old.presence.game) {
        // Check if the game was Apex Legends
        if (old.presence.game.name === 'Apex Legends') {
            // Make sure they're not still playing Apex Legends
            if (member.presence.game) {
                if (member.presence.game.name !== 'Apex Legends') {
                    member.removeRole(process.env.roleID);
                }
            }
        }
    }
});

// Login to discord api
client.login(process.env.token);
