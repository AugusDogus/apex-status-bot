<p align="center">
<img src="https://i.imgur.com/CKAla4P.png" alt="Logo">
</p>


![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/augusdogus/apex-status-bot) ![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/augusdogus/apex-status-bot) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/fa067f6879b74528b3a2ed791cb60e3e)](https://www.codacy.com/manual/AugusDogus/apex-status-bot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AugusDogus/apex-status-bot&amp;utm_campaign=Badge_Grade) ![GitHub](https://img.shields.io/github/license/AugusDogus/minecraft-status-bot?color=blue) [![Beerpay](https://img.shields.io/beerpay/AugusDogus/minecraft-status-bot)](https://beerpay.io/AugusDogus/minecraft-status-bot)
* * *

## Requirements

-   Docker
-   A [discord bot](https://discordapp.com/developers/applications/) token
-   Node.js (for development)

## Running from Docker Hub

    $ docker run --name apex-status-bot -e "token=Disord_Bot_Token_Here" -e "guild=Server_ID_Here" augusdogus/apex-status-bot:latest

## Building & Running from source

    $ git clone https://github.com/augusdogus/apex-status-bot
    $ cd apex-status-bot
    $ docker build -t apex-status-bot .
    $ docker run --name apex-status-bot -e "token=Disord_Bot_Token_Here" -e "guild=Server_ID_Here" apex-status-bot:latest

## License

This project is licensed under the MIT License - see the [License](License) file for details
