const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support

const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey('3098e7e8-2590-436e-89b0-939da517c1f1'); // Quickstart API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support

Asena.addCommand({pattern: 'deepai', fromMe: false, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {

    await message.sendMessage('❄️ *Command*: *.moodai <text>*\n💌 *Discription*: It finds your mood from the article you wrote.\n\n❄️ *Command*: *.colorai*\n💌 *Discription*: It colorize bw photos.\n\n❄️ *Command*: *.superai*\n💌 *Discription*: Improves the quality of photos with Neural AI.\n\n❄️ *Command*: *.waifuai*\n💌 *Discription*: Combines the color palettes of photos with artificial intelligence.\n\n❄️ *Command*: *.dreamai*\n💌 *Discription*: Applies deepdream effect to the photo.\n\n❄️ *Command*: *.neuraltalkai*\n💌 *Discription*: Explain the phenomenon in the photo with artificial intelligence.\n\n❄️ *Command*: *.ttiai <text>*\n💌 *Discription*: Converts text to a picture. (Text-to-Image)\n\n❄️ *Command*: *.toonai*\n💌 *Discription*: Turns the face in the photo into a cartoon character.\n\n❄️ *Command*: *.textai <text>*\n💌 *Discription*: It creates an artificial story for you from your sentence.\n\n❄️ *Command*: *.nudityai*\n💌 *Discription*: It shows the NSFW value between 1 and 0 in the photo.\n\n❄️ *Command*: *.ganstyle*\n💌 *Discription*: Combines the photo you answered with the selected picture.\n\n⚠️ *All the tools here work with deep learning. The more you use it, the more information it stores.* ```Use only english characters!```');

}));

Asena.addCommand({pattern: 'colorai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Colorizing.. 🎨',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("colorizer", {
                image: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'waifuai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Mixing.. 🧩',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("waifu2x", {
                image: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'superai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Enhancing.. 🖌️',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("torch-srgan", {
                image: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var resp = await deepai.callStandardApi("sentiment-analysis", {
        text: `${match[1]}`,

    });

    await message.reply(`*Mood:* ${resp.output}`);

}));

Asena.addCommand({pattern: 'dreamai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Starry Night.. 🌃',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("deepdream", {
                image: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'neuraltalkai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Reading.. 🙇🏻',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("neuraltalk", {
                image: fs.createReadStream("./output.jpg"),

            });

            await message.reply(`*Output:* ${resp.output}`);

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var resp = await deepai.callStandardApi("text2img", {
        text: `${match[1]}`,

    });

    var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

}));

Asena.addCommand({pattern: 'toonai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Tooning.. 🌟',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("toonify", {
                image: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'nudityai', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Finding NSFW.. 🔥',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("content-moderation", {
                image: fs.createReadStream("./output.jpg"),

            });

            await message.reply(`*Output:* ${resp.output.nsfw_score}`);

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));

Asena.addCommand({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var resp = await deepai.callStandardApi("text-generator", {
        text: `${match[1]}`,

    });

    await message.reply(`*Article:*\n ${resp.output}`);

}));

Asena.addCommand({pattern: 'ganstyle', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage('```Need Photo!```');

    var downloading = await message.client.sendMessage(message.jid,'Creating.. ♻️',MessageType.text);
    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {
            var resp = await deepai.callStandardApi("CNNMRF", {
                style: Config.GANSTYLE,
                content: fs.createReadStream("./output.jpg"),

            });

            var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })

            await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg})

        });

        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})

}));
