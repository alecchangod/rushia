const Discord = require('discord.js');
const {
    Client, Intents, Embed, Embedbuilder, EnumResolvers, GatewayIntendBits, Partials, ApplicationCommandType, ApplicationCommandOptionType, ButtonStyle, Colors, Collection, MessageEmbed, ButtonBuilder
} = require('discord.js');
const client = new Client({
   partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.Guild_Member], intents: [GatewayIntendBits.Guilds, GatewayIntendBits.Guild_Members, GatewayIntendBits.Guild_Messages, GatewayIntendBits.Guild_Message_Reactions]
});
const keep_alive = require('./keep_alive.js')
const mySecret = process.env['token']

//if the server doesn't have a set prefix yet
let prefix = '=';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(guild=>console.log(`${guild.name}(${guild.id})`));
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

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}

//client.on("messageCreate", async (message) => {
 // if(!message.guild || message.author.bot) return
  //let prefix = ":"
  //let args = message.content.slice(prefix.length).trim().split(/ +/)
  //let cmd = args.shift()?.toLowerCase()
  //if(cmd = "test"){
 // }
//});

//client.on("interactionCreate", async (interaction) => {
//if(interaction.isContextMenuCommand()){
  
//}
//});

client.on("messageCreate", async (message) => {
  if(!message.guild || message.author.bot) return
  let prefix = ":"
  let args = message.content.slice(prefix.length).trim().split(/ /)
  let cmd = args.shift()?.toLowerCase()
  if(message.content.startsWith(`${prefix}newtextchannel`)){
    message.guild.channels.create(cmd, {
      type : "text"
    })
  }
});

     
client.login(process.env.token).then(() => {
    client.user.setPresence({ activities: [{ name: 'discord.js V14出了真開心, 全部重寫', type: 'PLAYING' }], status: 'idle' });
});
