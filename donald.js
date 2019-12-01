const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');
const Discord = require("discord.js");


    exports.run = (client, message, args) => {
    // thanks to https://api.tronalddump.io
    fetch('https://api.tronalddump.io/random/quote')
      .then(res => res.json())
      .then(json => {
        const embed = new RichEmbed()
          .setColor('GOLD')
          .setThumbnail('https://icon-library.net/images/trump-icon/trump-icon-3.jpg')
          .setTitle('Donald Trump Quote')
          .setDescription(json.value)
        return message.channel.send(embed);
      })
      .catch(e => {
        message.channel.send('An error occured, Chuck is investigating this!');
        return console.error(e);
      });
  }
