const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on('ready', () => {
   client.user.setStatus('available')
   client.user.setPresence({ activities: [{ name: `Hi`, type: `LISTENING`}]});
});
client.on("messageCreate", (message)=> {
  if(message.author.bot) return;
  if (message.content.startsWith("Hellow"))
    message.channel.send(`Hi ${message.author.username}!`)
  if (message.content.startsWith("hellow")) 
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("yo"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("Yo"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("ayo"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("Ayo"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("Heya"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("heya"))
    message.channel.send(`Hi ${message.author.username}!`)
    if (message.content.startsWith("Hi"))
      message.channel.send(`Hi ${message.author.username}!`)
      if (message.content.startsWith("HI"))
        message.channel.send(`Hi ${message.author.username}!`)
  if (message.content.startsWith("hi")) {
    message.channel.send(`Hi ${message.author.username}!`);
   
  }
});

client.login("process.env.TOKEN");
