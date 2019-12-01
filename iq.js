// Fun command to troll people

const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = async (client, message, args) => {
    let user = message.mentions.users.first(); 
    if (message.mentions.users === message.author.username) return message.reply('Your iq is 0 :)');
    
    if (message.mentions.users.size < 1) return message.reply('Please mention someone')
    

    const iq = Math.floor(Math.random() * 201);
    const embed = new Discord.RichEmbed()
    .setColor("GOLD")
    .setThumbnail("https://cdn0.iconfinder.com/data/icons/business-and-finance-29/244/icon-093-512.png")
    .setTitle(user.username + " \nyour IQ is : " + iq)
    message.channel.send(embed)
}


