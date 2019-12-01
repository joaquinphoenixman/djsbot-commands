const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message, args) => {
  message.delete()
  // deletes the message right after being run
  
      let embed = new Discord.RichEmbed()
  .setImage("https://i.vgy.me/Oy2OV2.gif")
      // You can set any gif you like, but the current one is of the meme
      
  .setColor("GOLD")
  message.channel.send({embed});
  //sends the embed 
}

// X = your bots prefix
// After using Xwgh it will simply reply with a embeded we got him meme cuz... why not
