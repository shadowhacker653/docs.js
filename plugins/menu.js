const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu ?(.*)', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://1.bp.blogspot.com/-MP9m28jeB2o/YKIYiztzvyI/AAAAAAAABXo/P6aXxlQWQv8LNSP6SnCLu7Fa9wkZKpZzACLcBGAsYHQ/s1280/annicon%2Bicons%2Band%2Bheaders.jpeg";
    r_text[1] = "https://1.bp.blogspot.com/-tqx8vh7ZVpc/YKIYi-Y5wLI/AAAAAAAABXw/8qTqoe8ttJMNW-JHvgDZcC904bD48MS8wCLcBGAsYHQ/s750/x%2Bnot%2Bmine%2Bx%2B%2Bshared%2Bby%2B%25EC%2586%259C%25EC%2582%25AC%25ED%2583%2595%2Bon%2BWe%2BHeart%2BIt.jpeg";
    r_text[2] = "https://1.bp.blogspot.com/-fDjuLKa-xTE/YKIYi7wCnmI/AAAAAAAABXs/aBxO3MbIpvQAFT3uG24fW7PR_4jfH6VeACLcBGAsYHQ/s604/%25D0%259A%25D0%25BE%25D0%25BC%25D0%25B0%25D0%25BD%25D0%25B4%25D0%25B0%2B%25E2%2584%25967.jpeg";
    r_text[3] = "https://1.bp.blogspot.com/-rl4FCHMLV2s/YKIYjxjMboI/AAAAAAAABX0/z0XsnWdHshsICQpGGva54AQCbVene4XIACLcBGAsYHQ/s600/%25E3%258D%25BF%25EF%25A1%2580%2B%25F0%259D%2598%25AC%25F0%259D%2598%25AF%25F0%259D%2598%25BA%2B%25F0%259D%2598%25A9%25F0%259D%2598%25A6%25F0%259D%2598%25A2%25F0%259D%2598%25A5%25F0%259D%2598%25A6%25F0%259D%2598%25B3%2B%25E2%25A0%2580%25F0%2596%25A3%2598.jpeg";
    r_text[4] = "https://1.bp.blogspot.com/-FhXQw33e8nU/YKIYkxg-1NI/AAAAAAAABX4/GcNVk8eDauUBNjbxnF2ApFq3eDgJgABFQCLcBGAsYHQ/s1500/%25EC%2586%258C%25EC%259D%2580%2Bon%2BTwitter.jpeg";
    r_text[5] = "https://1.bp.blogspot.com/-CilVPISVDT8/YKIYk5Rv9OI/AAAAAAAABX8/O7W2sn1r354iI3MzfORKHojMuCMq-mnHQCLcBGAsYHQ/s1500/%25F0%259F%25A6%258B%2Bon%2BTwitter.jpeg";
    
    var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❂━━━━━❮⛦𝐇𝐄𝐋𝐏⛥❯━━━━━━❂

 🤖 *Commɑnd*  ➨ -𝐜𝐚𝐫𝐛𝐨𝐧  
 💬 *Discription* ➪ 𝐔𝐬𝐞𝐬 𝐜𝐚𝐫𝐛𝐨𝐧.𝐬𝐡 𝐟𝐨𝐫  𝐓𝐞𝐱𝐭-𝐭𝐨 -𝐈𝐦𝐚𝐠𝐞 
 ⚠️ *Wɑrn* 𝐏𝐥𝐞𝐚𝐬𝐞 𝐨𝐧𝐥𝐲 𝐭𝐲𝐩𝐞 𝐢𝐧 𝐞𝐧 𝐚𝐧𝐝  𝐭𝐫 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 

 🤖 *Commɑnd*  ➨ -𝐦𝐩𝟒𝐚𝐮𝐝𝐢𝐨 
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨  𝐬𝐨𝐮𝐧𝐝. 

 🤖 *Commɑnd*  ➨ -𝐢𝐦𝐚𝐠𝐞𝐬𝐭𝐢𝐜𝐤𝐞𝐫 
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐡𝐞  𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨. 

 🤖 *Commɑnd*  ➨ -𝐟𝐟𝐦𝐩𝐞𝐠  
 💬 *Discription* ➪ 𝐀𝐩𝐩𝐥𝐢𝐞𝐬 𝐭𝐡𝐞 𝐝𝐞𝐬𝐢𝐫𝐞𝐝  𝐟𝐟𝐦𝐩𝐞𝐠 𝐟𝐢𝐥𝐭𝐞𝐫 𝐭𝐨 𝐭𝐡𝐞 𝐯𝐢𝐝𝐞𝐨.
 ⌨️ *Exɑmple* .𝐟𝐟𝐦𝐩𝐞𝐠 𝐟𝐚𝐝𝐞=𝐢𝐧:𝟎:𝟑𝟎 

 🤖 *Commɑnd*  ➨ -𝐦𝐞𝐦𝐞  
 💬 *Discription* ➪ 𝐏𝐡𝐨𝐭𝐨 𝐦𝐞𝐦𝐞𝐬 𝐲𝐨𝐮  𝐫𝐞𝐩𝐥𝐢𝐞𝐝 𝐭𝐨. 

 🤖 *Commɑnd*  ➨ -𝐧𝐞𝐤𝐨 
 💬 *Discription* ➪ 𝐑𝐞𝐩𝐥𝐢𝐞𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬  𝐰𝐢𝐥𝐥 𝐛𝐞 𝐚𝐝𝐝𝐞𝐝 𝐭𝐨 𝐧𝐞𝐤𝐨𝐛𝐢𝐧.𝐜𝐨𝐦. 

 🤖 *Commɑnd*  ➨ -𝐨𝐜𝐫  
 💬 *Discription* ➪ 𝐑𝐞𝐚𝐝𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐨𝐧  𝐭𝐡𝐞 𝐩𝐡𝐨𝐭𝐨 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐫𝐞𝐩𝐥𝐢𝐞𝐝. 

 🤖 *Commɑnd*  ➨ -𝐣𝐢𝐝  
 💬 *Discription* ➪ 𝐆𝐢𝐯𝐢𝐧𝐠 𝐮𝐬𝐞𝐫'𝐬 𝐉𝐈𝐃. 

 🤖 *Commɑnd*  ➨ -𝐫𝐞𝐦𝐨𝐯𝐞𝐛𝐠  
 💬 *Discription* ➪ 𝐑𝐞𝐦𝐨𝐯𝐞𝐬 𝐭𝐡𝐞  𝐛𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝 𝐨𝐟 𝐭𝐡𝐞 𝐩𝐡𝐨𝐭𝐨𝐬. 

 🤖 *Commɑnd*  ➨ -𝐫𝐞𝐩𝐨𝐫𝐭  
 💬 *Discription* ➪ 𝐒𝐞𝐧𝐝𝐬 𝐫𝐞𝐩𝐨𝐫𝐭𝐬 𝐭𝐨  𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬. 

 🤖 *Commɑnd*  ➨ -𝐬𝐜𝐚𝐧  
 💬 *Discription* ➪ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐰𝐡𝐞𝐭𝐡𝐞𝐫  𝐭𝐡𝐞 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐨𝐧  𝐖𝐡𝐚𝐭𝐀𝐩𝐩. 

 🤖 *Commɑnd*  ➨ -𝐭𝐫𝐭 
 💬 *Discription* ➪ 𝐈𝐭 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐬 𝐰𝐢𝐭𝐡  𝐆𝐨𝐨𝐠𝐥𝐞 𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞. 𝐘𝐨𝐮 𝐦𝐮𝐬𝐭 𝐫𝐞𝐩𝐥𝐲  𝐚𝐧𝐲 𝐦𝐞𝐬𝐬𝐚𝐠𝐞. 
 ⌨️ *Exɑmple*  .𝐭𝐫𝐭 𝐭𝐫 𝐢𝐭 (𝐅𝐫𝐨𝐦 𝐓𝐮𝐫𝐤𝐢𝐬𝐡  𝐭𝐨 𝐈𝐭𝐚𝐥𝐢𝐚𝐧) 

 🤖 *Commɑnd*  ➨ -𝐜𝐮𝐫𝐫𝐞𝐧𝐜𝐲 

 🤖 *Commɑnd*  ➨ -𝐭𝐭𝐬  
 💬 *Discription* ➪ 𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐞𝐱𝐭 𝐭𝐨  𝐬𝐨𝐮𝐧𝐝. 

 🤖 *Commɑnd*  ➨ -𝐬𝐨𝐧𝐠  
 💬 *Discription* ➪ 𝐔𝐩𝐥𝐨𝐚𝐝𝐬 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠  𝐲𝐨𝐮 𝐰𝐫𝐨𝐭𝐞. 

 🤖 *Commɑnd*  ➨ -𝐯𝐢𝐝𝐞𝐨  
 💬 *Discription* ➪ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬 𝐯𝐢𝐝𝐞𝐨  𝐟𝐫𝐨𝐦 𝐘𝐨𝐮𝐓𝐮𝐛𝐞. 

 🤖 *Commɑnd*  ➨ -𝐲𝐭  
 💬 *Discription* ➪ 𝐈𝐭 𝐬𝐞𝐚𝐫𝐜𝐡𝐬 𝐨𝐧  𝐘𝐨𝐮𝐓𝐮𝐛𝐞. 

 🤖 *Commɑnd*  ➨ -𝐰𝐢𝐤𝐢  
 💬 *Discription* ➪ 𝐒𝐞𝐚𝐫𝐜𝐡𝐞𝐬 𝐪𝐮𝐞𝐫𝐲 𝐨𝐧  𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚. 

 🤖 *Commɑnd*  ➨ -𝐢𝐦𝐠  
 💬 *Discription* ➪ 𝐒𝐞𝐚𝐫𝐜𝐡𝐞𝐬 𝐟𝐨𝐫  𝐫𝐞𝐥𝐚𝐭𝐞𝐝 𝐩𝐢𝐜𝐬 𝐨𝐧 𝐆𝐨𝐨𝐠𝐥𝐞. 

 🤖 *Commɑnd*  ➨ -𝐥𝐲𝐫𝐢𝐜  
 💬 *Discription* ➪ 𝐅𝐢𝐧𝐝𝐬 𝐭𝐡𝐞 𝐥𝐲𝐫𝐢𝐜𝐬 𝐨𝐟  𝐭𝐡𝐞 𝐬𝐨𝐧𝐠. 

 🤖 *Commɑnd*  ➨ -𝐜𝐨𝐯𝐢𝐝  
 💬 *Discription* ➪ 𝐒𝐡𝐨𝐰𝐬 𝐭𝐡𝐞 𝐝𝐚𝐢𝐥𝐲  𝐚𝐧𝐝 𝐨𝐯𝐞𝐫𝐚𝐥𝐥 𝐜𝐨𝐯𝐢𝐝 𝐭𝐚𝐛𝐥𝐞 𝐨𝐟 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧  𝟏𝟓 𝐜𝐨𝐮𝐧𝐭𝐫𝐢𝐞𝐬. 

 🤖 *Commɑnd*  ➨ -𝐬𝐬  
 💬 *Discription* ➪ 𝐓𝐚𝐤𝐞𝐬 𝐚 𝐬𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭  𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐩𝐚𝐠𝐞 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐢𝐯𝐞𝐧 𝐥𝐢𝐧𝐤. 

 🤖 *Commɑnd*  ➨ -𝐢𝐧𝐬𝐭𝐚  
 💬 *Discription* ➪ 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐬 𝐯𝐢𝐝𝐞𝐨𝐬  𝐨𝐫 𝐩𝐡𝐨𝐭𝐨𝐬 𝐟𝐫𝐨𝐦 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦. 

 🤖 *Commɑnd*  ➨ -𝐚𝐧𝐢𝐦𝐞𝐬𝐚𝐲  
 💬 *Discription* ➪ 𝐈𝐭 𝐰𝐫𝐢𝐭𝐞𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭  𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐡𝐞 𝐚𝐧𝐢𝐦𝐞 𝐠𝐢𝐫𝐥 𝐢𝐬  𝐡𝐨𝐥𝐝𝐢𝐧𝐠 

 🤖 *Commɑnd*  ➨ -𝐜𝐡𝐚𝐧𝐠𝐞𝐬𝐚𝐲  
 💬 *Discription* ➪ 𝐓𝐮𝐫𝐧𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧𝐭𝐨  𝐭𝐡𝐞 𝐜𝐡𝐚𝐧𝐠𝐞 𝐦𝐲 𝐦𝐢𝐧𝐝 𝐩𝐨𝐬𝐭𝐞𝐫. 

 🤖 *Commɑnd*  ➨ -𝐭𝐫𝐮𝐦𝐩𝐬𝐚𝐲  
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐭𝐨  𝐓𝐫𝐮𝐦𝐩'𝐬 𝐭𝐰𝐞𝐞𝐭. 

 🤖 *Commɑnd*  ➨ -𝐬𝐭𝐢𝐜𝐤𝐞𝐫 
 💬 *Discription* ➪ 𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐲𝐨𝐮𝐫  𝐫𝐞𝐩𝐥𝐢𝐞𝐝 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐬𝐭𝐢𝐜𝐤𝐞𝐫. 

 🤖 *Commɑnd*  ➨ -𝐚𝐥𝐢𝐯𝐞 
 💬 *Discription* ➪ 𝐃𝐨𝐞𝐬 𝐛𝐨𝐭 𝐰𝐨𝐫𝐤

 🤖 *Commɑnd*  ➨ -𝐭𝐚𝐠𝐚𝐝𝐦𝐢𝐧 
 💬 *Discription* ➪ 𝐓𝐚𝐠𝐬 𝐠𝐫𝐨𝐮𝐩  𝐚𝐝𝐦𝐢𝐧𝐬. 

 🤖 *Commɑnd*  ➨ -𝐭𝐛𝐥𝐞𝐧𝐝  
 💬 *Discription* ➪ 𝐀𝐩𝐩𝐥𝐢𝐞𝐬 𝐭𝐡𝐞  𝐬𝐞𝐥𝐞𝐜𝐭𝐞𝐝 𝐓𝐁𝐥𝐞𝐧𝐝 𝐞𝐟𝐟𝐞𝐜𝐭 𝐭𝐨 𝐯𝐢𝐝𝐞𝐨𝐬. 

 🤖 *Commɑnd*  ➨ -𝐭𝐭𝐩  
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐞𝐱𝐭 𝐭𝐨  𝐩𝐥𝐚𝐢𝐧 𝐩𝐚𝐢𝐧𝐭𝐢𝐧𝐠. 

 🤖 *Commɑnd*  ➨ -𝐠𝐥𝐨𝐰𝐭𝐭𝐩  
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐞𝐱𝐭 𝐢𝐧𝐭𝐨  𝐧𝐞𝐨𝐧 𝐩𝐚𝐢𝐧𝐭𝐢𝐧𝐠. 

 🤖 *Commɑnd*  ➨ -𝐚𝐭𝐭𝐩  
 💬 *Discription* ➪ 𝐀𝐝𝐝𝐬 𝐫𝐚𝐢𝐧𝐛𝐨𝐰  𝐞𝐟𝐟𝐞𝐜𝐭 𝐭𝐨 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐚𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫. 

 🤖 *Commɑnd*  ➨ -𝐮𝐧𝐯𝐨𝐢𝐜𝐞 
 💬 *Discription* ➪ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚𝐮𝐝𝐢𝐨 𝐭𝐨  𝐬𝐨𝐮𝐧𝐝 𝐫𝐞𝐜𝐨𝐫𝐝𝐢𝐧𝐠. 

 🤖 *Commɑnd*  ➨ -𝐯𝐨𝐢𝐜𝐲 
 💬 *Discription* ➪ 𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚𝐮𝐝𝐢𝐨 𝐭𝐨  𝐭𝐞𝐱𝐭. 

 🤖 *Commɑnd*  ➨ -𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 
 💬 *Discription* ➪ 𝐈𝐭 𝐬𝐞𝐧𝐝𝐬 𝐡𝐢𝐠𝐡  𝐫𝐞𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫𝐬. 

 🤖 *Commɑnd*  ➨ -𝐰𝐞𝐚𝐭𝐡𝐞𝐫  
 💬 *Discription* ➪ 𝐒𝐡𝐨𝐰𝐬 𝐭𝐡𝐞 𝐰𝐞𝐚𝐭𝐡𝐞𝐫. 

 🤖 *Commɑnd*  ➨ -𝐬𝐩𝐞𝐞𝐝𝐭𝐞𝐬𝐭 
 💬 *Discription* ➪ 𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐬  𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐚𝐧𝐝 𝐔𝐩𝐥𝐨𝐚𝐝 𝐬𝐩𝐞𝐞𝐝. 

 🤖 *Commɑnd*  ➨ -𝐩𝐢𝐧𝐠 
 💬 *Discription* ➪ 𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐬 𝐲𝐨𝐮𝐫 𝐩𝐢𝐧𝐠. 

 🤖 *Commɑnd*  ➨ -𝐬𝐡𝐨𝐫𝐭  
 💬 *Discription* ➪ 𝐒𝐡𝐨𝐫𝐭𝐞𝐧 𝐭𝐡𝐞 𝐥𝐨𝐧𝐠  𝐥𝐢𝐧𝐤. 

 🤖 *Commɑnd*  ➨ -𝐜𝐚𝐥𝐜  
 💬 *Discription* ➪ 𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐬 𝐬𝐢𝐦𝐩𝐥𝐞  𝐦𝐚𝐭𝐡 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬. 

 🤖 *Commɑnd*  ➨ -𝐰𝐡𝐨𝐢𝐬 
 💬 *Discription* ➪ 𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐦𝐞𝐭𝐚𝐝𝐚𝐭𝐚  𝐝𝐚𝐭𝐚 𝐨𝐟 𝐠𝐫𝐨𝐮𝐩 𝐨𝐫 𝐩𝐞𝐫𝐬𝐨𝐧. 

 🤖 *Commɑnd*  ➨ -𝐠𝐚𝐲 
 💬 *Discription* ➪ 𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐬 𝐭𝐡𝐞  𝐩𝐞𝐫𝐜𝐞𝐧𝐭𝐚𝐠𝐞 𝐨𝐟 𝐠𝐚𝐲𝐬 𝐲𝐨𝐮 𝐫𝐞𝐬𝐩𝐨𝐧𝐝 𝐭𝐨. 

 🤖 *Commɑnd*  ➨ -𝐠𝐥𝐢𝐭𝐜𝐡  
 💬 *Discription* ➪ 𝐈𝐭 𝐰𝐫𝐢𝐭𝐞𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭  𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐡𝐞 𝐚𝐧𝐢𝐦𝐞 𝐠𝐢𝐫𝐥 𝐢𝐬  𝐡𝐨𝐥𝐝𝐢𝐧𝐠 

 🤖 *Commɑnd*  ➨ -𝐬𝐭𝐤 
 💬 *Discription* ➪ 𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐲𝐨𝐮𝐫  𝐫𝐞𝐩𝐥𝐢𝐞𝐝 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐬𝐭𝐢𝐜𝐤𝐞𝐫.`}) 

}));
