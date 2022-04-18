require('dotenv').config()
const Discord = require('discord.js');
const {
    Client, Intents, Embed, Embedbuilder, EnumResolvers, GatewayIntendBits, Partials, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, Colors, Collection, MessageEmbed, ButtonBuilder
} = require('discord.js');
const fs = require('fs')
const client = new Discord.Client({
messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  partials: [
Partials.Message,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent,
    Partials.User,
    Partials.ThreadMember,
],
  intents: 32767
  
});





//if the server doesn't have a set prefix yet
let prefix = '&';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(guild=>console.log(`${guild.name}(${guild.id})`));
});

process.on('unhandledRejection', err => {
  console.log(`Unhandled Promise Rejection: ${err.message}`);
});

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");
client.events = new Collection();

module.exports = client;

["Command"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(!message.guild) return;
  if(!message.member) message.member = await message.guild.fetchMember(message);
const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if(!command) command = client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args)
});


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

client.login(process.env.token).then(() => { 
    client.user.setPresence({ activities: [{ name: 'discord.js14出了真開心,全部重寫', type: 'Playing' }], status: 'idle' });
});
