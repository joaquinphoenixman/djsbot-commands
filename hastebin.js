// Put anything after Xhastebin into hastebin, good for sharing code 


const hastebin = require('hastebin-gen');
// You can install it by using *npm i hastebin-gen*

const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    let haste = args.slice(0).join(" ")
       let type = args.slice(1).join(" ")
       if (!args[0]) { return message.channel.send("What do you want to post in Hastebin?") }
       // if there is nothing after using Xhastebin it will return the message above
       
       hastebin(haste).then(hastelink => {
        let embed = new Discord.RichEmbed()
        .setTitle("**" + hastelink + "**")
        .setColor("GOLD")
        message.channel.send(embed);
       }).catch(console.error);
       message.delete();
       // delete the message sent so the chat doesnt get cluttered with the code
    }
