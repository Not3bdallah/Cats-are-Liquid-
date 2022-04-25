const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is Ready");
})

app.get("/", (req, res) => {
  res.send("I'm Alive");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("ready", () => {
  console.log("The Bot is Idle");
  client.user.setPresence({
    status : "idle"
  });
});


client.on("ready", async() => {
  let servers = await client.guilds.cache.size
  let servercount = await client.guilds.cache.reduce((a,b) => a+b.memberCount, 0 )

const activities = [
  `sup│beware of imposters`,
  `Watching ${servercount} Crewmates`
]

setInterval(()=>{
const status = activities[Math.floor(Math.random()*activities.lenght)]
  client.user.setPresence({ activities : [{name : `Meow :3`}]})


}, 5000)
})


client.on("message", message => {
  if(message.content === "sup boi") {
    message.channel.send("sup!")
  }
})
client.on("message", message => {
  if(message.content === "سلم علي عمك راينو") {
    message.channel.send("ازيك يا عمو <@896089166738247721>")
  }
  })
          client.on("message", message => {
  if(message.content === "ip") {
    message.channel.send("> *SMP IP* **: `Ramadan.FlareHost.tk`**")
  }
})
client.on("message", message => {
  if(message.content === "<@941359855921426472>") {
    message.channel.send("اي")
  }
})
client.on("message", message => {
  if(message.content === "ازيك <@941359855921426472>") {
    message.channel.send("انا كويس الحمدلله")
  }
})
client.on("message", message => {
  if(message.content === "ا") {
    message.channel.send("اي اللي ا")
  }
})
client.on("message", message => {
  if(message.content === "سلام عليكم") {
    message.channel.send("وعليكم السلام")
  }
})
client.on("message", message => {
  if(message.content === "السلام عليكم") {
    message.channel.send("وعليكم السلام")
  }
})
client.on("message", message => {
  if(message.content === "amongus is sus") {
    message.channel.send("sussy baka ?! <a:the_rock_but_animated:955835266587844670>")
  }
})
client.on("message", message => {
  if(message.content === "#vote") {
    message.channel.send("Shoutout my friend <@282859044593598464> here :                       https://top.gg/bot/282859044593598464/vote")
  }
})

client.login(process.env.token);

var http = require('http'); 

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);
