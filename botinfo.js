const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
const version = "v11.5.1"
exports.run = (client, message, args) => {
    
var os = require("os");
function cpuAverage() {
  var totalIdle = 0, totalTick = 0;
  var cpus = os.cpus();
  for(var i = 0, len = cpus.length; i < len; i++) {
    var cpu = cpus[i];
    for(type in cpu.times) {
      totalTick += cpu.times[type];
   }     
    totalIdle += cpu.times.idle;
  }
  return {idle: totalIdle / cpus.length,  total: totalTick / cpus.length};
}
var startMeasure = cpuAverage();
setTimeout(function() { 
  var endMeasure = cpuAverage(); 
  var idleDifference = endMeasure.idle - startMeasure.idle;
  var totalDifference = endMeasure.total - startMeasure.total;
      fs.readdir("command file location", (err, files) => {
       const filez = files.length
       if (err) return console.error(err);
      const embed = new Discord.RichEmbed()
            .setAuthor(client.user.username, client.user.avatarURL) 
            .setColor("GOLD")
            .addField("Memory", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MBS", true)
            .addField("CPU", percentageCPU + "% CPU", true)
            .addField("Commands:", `${filez + 11}`, true)
            .addField('Total Users', `${client.users.size}`, true)
            .addField('Total Channels:', `${client.channels.size}`, true)
            .addField('Total Servers', Math.ceil(client.guilds.size), true)
            .addField('Library', `discord.js ${version}`, true)
            .addField('Node.js Version', process.version, true)
            .addField('Bot Version', "VERSION", true)
            .setTimestamp()         
            .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
            })
      })
 }, 100);
}
