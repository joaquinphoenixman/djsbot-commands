
    const Discord = require("discord.js");
    const bot = new Discord.Client();
    
    exports.run = async (client, message, args) => {
        const iq = Math.floor(Math.random() * 201);

        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let target = message.mentions.users.first() || message.author
        if (iq < 100) message.channel.send({"embed": {
            // If the random number is below 100 aka iq < 100 it will display different text
            
      "color": 0xFFD700,
      "title": member.user.username + "\nYour IQ is " + iq,
      "thumbnail": {
          "url": "https://cdn2.iconfinder.com/data/icons/emoticons-hand-drawn/81/Confused-512.png"

    } 
    }}); 
        else message.channel.send({embed: {
            // if iq is bigger then 100 it will display something else feel free to edit it
            "color": 0xFFD700,
            "title": member.user.username + "\nYour IQ is " + iq,
            "thumbnail": {
                "url": "https://icon-library.net/images/smart-icon/smart-icon-16.jpg"
            }
            }})

}
