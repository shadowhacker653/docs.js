const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const WAIFU_DESC = "Gives you random waifu image"

    Asena.addCommand({ pattern: 'waifu', fromMe: false }, async (message, match) => {
      
 if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

 await axios
          .get(`https://videfikri.com/api/anime/neko`)
          .then(async (response) => {
            const {
              url_gbr,
            } = response.data.result

            const imageBuffer = await axios.get(url_gbr, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(imageBuffer.data), MessageType.image, {
                        caption: "*Here is your waifu* 🐥"
            })
          })
      },
    )
