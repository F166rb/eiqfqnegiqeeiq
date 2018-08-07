const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();

client.on('ready', () => {
    console.log('----------------');
    console.log(`✨ Id: Nizx`);
    console.log(`✨ Prefix: Soon`);
    console.log(`✨ Servers: 1`);
    console.log(`✨ Members: 1000`);
    console.log(`✨ Channels: Limtit`);
    console.log('----------------');
    console.log(`Logged in as `);
    client.user.setGame(`⠀⠀⠀⠀⠀⠀SPT Server System Bot.   `, "http://twitch.tv/Streammingg")
    client.user.setStatus("dnd")
});
