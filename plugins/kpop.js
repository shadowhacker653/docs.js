const Asena = require('../events');
const axios = require('axios');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
const fs = require('fs');

	Asena.addCommand({ pattern: 'bts', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/bts?APIKEY=a3c8a5a794c04f84`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'BTS💜' })
	}));

	Asena.addCommand({ pattern: 'blackpink', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/blackpink?APIKEY=a3c8a5a794c04f84`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Blackpink in your area.' })
	}));

	Asena.addCommand({ pattern: 'exo', fromMe: true }, (async (message, match) => {
		var drkhent = await axios.get(`https://api.xteam.xyz/randomimage/exo?APIKEY=a3c8a5a794c04f84`, { responseType: 'arraybuffer' })
		await message.sendMessage(Buffer.from(drkhent.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'EXO ❤️' })
	}));

	
