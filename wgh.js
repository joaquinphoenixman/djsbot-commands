const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete()
      let embed = new Discord.RichEmbed()
  .setImage("https://i.vgy.me/Oy2OV2.gif")
  .setColor("GOLD")
  message.channel.send({embed});
}

// X = your bots prefix
// After using Xwgh it will simply reply with a embeded we got him meme cuz... why not
