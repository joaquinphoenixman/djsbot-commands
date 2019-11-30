    // thanks to https://api.chucknorris.io

const fetch = require('node-fetch');
const { RichEmbed } = require('discord.js');
const Discord = require("discord.js");

    exports.run = (client, message, args) => {

    
    fetch('https://api.chucknorris.io/jokes/random')
    // fetch the chucknorris.io api
    
      .then(res => res.json())
      .then(json => {
      
        const embed = new RichEmbed()
        // const EMBED is the name of the embed
        // Later you will use return message.channel.send(embed)
        // If you did            : const chuck = new RichEmbed()
        // You would have to use : return message.channel.send(chuck)
        
          .setColor("GOLD")
          // Set color for your embed EXAMPLE : .setColor("RED")
          
          .setThumbnail('https://i.vgy.me/1KVXAc.png')
          // Set the thumbnail for the embed
          
          .setTitle('Chuck Norris Fact')
          // Set your badass title
          
          .setDescription(json.value)
          // The description is from the API
          
        return message.channel.send(embed);
        // Send the embed
      })
      .catch(e => {
      // Catch errors
      
        message.channel.send('Error');
        // This message will be sent to the server
        
        return console.error(e);
        // And the full error to the console
      });
  }
