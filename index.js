const Discord = require('discord.js');
const {MessageAttachment}=require('discord.js');
const {
    Client,
    Intents,
  MessageEmbed, 
  EnumResolvers, 
  GatewayIntendBits
} = require('discord.js');
const client = new Client({
   partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'], intents: [GatewayIntendBits.GUILDS, GatewayIntendBits.GUILD_MEMBERS, GatewayIntendBits.GUILD_MESSAGES, GatewayIntendBits.GUILD_MESSAGE_REACTIONS, "GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});
const keep_alive = require('./keep_alive.js')
const mySecret = process.env['token']

//if the server doesn't have a set prefix yet
let prefix = '=';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(guild=>console.log(`${guild.name}(${guild.id})`));
       let scheduledMessage = new cron.CronJob('00 00 04 * * *', () => {
         const guild = client.guilds.cache.get(process.env.grp2);
         const channel = guild.channels.cache.get(process.env.channelID2);
         channel.send('你各位別當死魚堆');
        });
        scheduledMessage.start()});
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

// prints time in HH:MM format
console.log(hours + ":" + minutes);

const cron = require('cron');
            

client.setMaxListeners(50)

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

client.on("messageCreate", async (message) => {
  if(!message.guild || message.author.bot) return
  let prefix = ":"
  let args = message.content.slice(prefix.length).trim().split(/ +/)
  let cmd = args.shift()?.toLowerCase()
  if(cmd = "test"){
    const enumValue = EnumResolvers.resolveButtonStyle('PRIMARY');
  }
})