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

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}
client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content === "inspire") {
    getQuote().then(quote => msg.channel.send(quote))
  }
})

client.login("OTc2NjcyMTgyMzc5ODg0NTg0.G77S_q.CXbocpviRgbHTCb__I9awGkpm16ctIQIggYfYw");