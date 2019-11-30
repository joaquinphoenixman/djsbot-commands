const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');
// If missing the snekfetch install it by running *npm i snekfetch* in the terminal!

exports.run = async (client, message, args) => {
	try {
    // This is to catch errors within the code!

        if (!message.channel.nsfw) return message.channel.send("```❌ Due to this subreddit being extremely offensive this command is only allowed to be used in NSFW channels! ❌```")
        // if the command is run in a SFW channel it will respond with the return message!

        const { body } = await snekfetch
            .get('https://www.reddit.com/r/OffensiveMems.json?sort=top&t=week')
        // Will get the contents of r/OffensiveMems

            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        // if the server is set to NSFW it will work and will go to the next line

        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        // If it exceeds the allowed length it will return a "error"

        const randomnumber = Math.floor(Math.random() * allowed.length)
        // will choose a random post instead of always picking the first one

        const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        // .setTitle(allowed[randomnumber].data.title)
        // .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        // .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        // .setFooter("Edgy Memes provided by r/OffensiveMems")
        message.channel.send(embed)
        // Create the embed
        // If you want it to display any other things just remove the 2 // before the code

    } catch(err) {
        // now if there are any errors caught in the code it will respond with this :

        const errorlogs = client.channels.get('ID')
        // in place of the ID use a channel ID, and thats where the errors will be sent to

        message.channel.send(`ERROR SENT`)
        // If there was indeed a error in the command, on ANY server the command has been run to, it will reply with *ERROR SENT* and then to the next line

        errorlogs.send(`Error on **edgymeme** commands!:\n \`\`\`js\n${err}\`\`\``)
        // Now you will get the full error code so you don't have to keep checking your terminal
        
    }
}

