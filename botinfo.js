const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
const version = "v11.5.1"
exports.run = (client, message, args) => {


      
var os = require("os");

//Create function to get CPU information
function cpuAverage() {

  //Initialise sum of idle and time of cores and fetch CPU info
  var totalIdle = 0, totalTick = 0;
  var cpus = os.cpus();

  //Loop through CPU cores
  for(var i = 0, len = cpus.length; i < len; i++) {

    //Select CPU core
    var cpu = cpus[i];
    //Total up the time in the cores tick
    for(type in cpu.times) {
      totalTick += cpu.times[type];
   }     
    //Total up the idle time of the core
    totalIdle += cpu.times.idle;
  }
  //Return the average Idle and Tick times
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}

//Grab first CPU Measure
var startMeasure = cpuAverage();

//Set delay for second Measure
setTimeout(function() { 

  //Grab second Measure
  var endMeasure = cpuAverage(); 

  //Calculate the difference in idle and total time between the measures
  var idleDifference = endMeasure.idle - startMeasure.idle;
  var totalDifference = endMeasure.total - startMeasure.total;

  //Calculate the average percentage CPU usage
  var percentageCPU = 100 - ~~(100 * idleDifference / totalDifference);

      fs.readdir("command file location", (err, files) => {
      // reads how many files are in a file location, you can use for example : ./commands/
      
       const filez = files.length
       if (err) return console.error(err);
       // If there are any errors it will get sent to your console
       
      const embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL)
            // sets the author as the bot
            
            .setColor("GOLD")
            .addField("Memory", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MBS", true)
            // Will show memory usage
            
            .addField("CPU", percentageCPU + "% CPU", true)
            // Will show CPU usage ** Might not work for glitch **
            
            .addField("Commands:", `${filez + 11}`, true)
            // Will show how many files there are in the commands folder
            
            .addField('Total Users', `${client.users.size}`, true)
            // How many users are currently seeing this bot
            
            .addField('Total Channels:', `${client.channels.size}`, true)
            // How many channels the bot is in
            
            .addField('Total Servers', Math.ceil(client.guilds.size), true)
            // How many servers the bot is in
            
            .addField('Library', `discord.js ${version}`, true)
            // DJS version
            
            .addField('Node.js Version', process.version, true)
            // NodeJS version
            
            .addField('Bot Version', "VERSION", true)
            // in "VERSION" put the version you'd like 
            
            .setTimestamp()
            // sets the timestamp of the command used
            
            .setFooter(client.user.username, client.user.avatarURL);
            // sets the bot as the footer 
            
      message.channel.send({embed}) 
      // send msg
      
            })
      })
 }, 100);
 // this 100 is for cpu
 
}
