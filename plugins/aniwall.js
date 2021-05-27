const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const AN_DESC = "It sends random anime wallpaper";
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'aniwall', fromMe: true, desc: AN_DESC}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "https://1.bp.blogspot.com/-d99vxv6NUCY/YGwcsSLaPhI/AAAAAAAABJU/nuhGryXFVxwPvTd3ai7k_WF1Sturxty4gCLcBGAsYHQ/s1280/UMARU-CHAN_WALLPAPER-5bd205dd-bfd2-4603-9ff1-1c06ff6d4b87.jpg";
r_text[1] = "https://1.bp.blogspot.com/-AjjazFRjhcs/YGwcsR24crI/AAAAAAAABJQ/QJkf_nkHvLcQ2bN1AC3X9wIUHUD-qrLXQCLcBGAsYHQ/s2160/Toga_-14b5431c-f62b-4b88-825a-f5f1167d9e5c.jpg";
r_text[2] = "https://1.bp.blogspot.com/-1bGr3bv9mGg/YGwcrrBAcEI/AAAAAAAABJM/7z9FpQMFQ2YJHu_eDEnBowSJyCWFHfF7ACLcBGAsYHQ/s2160/Shoto_Todoroki-e00cabe8-4c6e-40de-947f-9f2a62851fe0.jpg";
r_text[3] = "https://1.bp.blogspot.com/-D3666BDwFCA/YGwcq9n_I_I/AAAAAAAABJI/WmCcKrJrYQUjt48JhVswAUe0jQiUYcfrwCLcBGAsYHQ/s1920/Night_Silence-3ffdf5a4-2b9f-4789-a76b-1c36ed71f78b.jpg";
r_text[4] = "https://1.bp.blogspot.com/-31IinULlqY8/YGwiHszVRaI/AAAAAAAABL8/E0_iWyW8zZYr48ybGSVXozmUzVTBTKmUgCLcBGAsYHQ/s1920/Rem_ReZero_Moon-e224f09e-8619-4df5-b691-02290b63e786.jpg";
r_text[5] = "https://1.bp.blogspot.com/-5P2CHARlBWk/YGwiHYyB6LI/AAAAAAAABL4/ExrK1yy9YNEpU_An9IuLch6qpQUx8OxZgCLcBGAsYHQ/s1440/Rem_ReZero-1a3f7554-43a6-4723-aff7-6c7662f5e2fb.jpg"; 
r_text[6] = "https://1.bp.blogspot.com/-NmHbiu76xpE/YGwiHcAepbI/AAAAAAAABL0/r9Whi2Gulh48MEKQu5buN-3ZYT4aYO5QwCLcBGAsYHQ/s1875/Oreki_x_Chitanda-703adfd5-044d-478d-bf99-98b94ffd2a53.jpg";
r_text[7] = "https://1.bp.blogspot.com/-Gj4MsIbiSAc/YGwiHNh7xFI/AAAAAAAABLw/bzuiFoK_2ss60L9ESfhlGXnWRYCMr-slQCLcBGAsYHQ/s1476/Hyouka-10b732b0-a55f-49e2-9680-d0ab2e6d5ffb.jpg";
r_text[8] = "https://1.bp.blogspot.com/-dAVzfsRqJSQ/YGwiFitPvQI/AAAAAAAABLo/waMZXRlq0mINwKCXOS7RTiZSfW05tFDcACLcBGAsYHQ/s2160/Cowboy_bebop_-bbcfe180-dc5c-47e9-9e24-3c01380fb3f7.jpg";
r_text[9] = "https://1.bp.blogspot.com/-MERaFRaoX7w/YGwiGiEYICI/AAAAAAAABLs/XnspAmMGp4w27McQFpozZk7yn3JhrjyLACLcBGAsYHQ/s1920/Cowboy_bebop_2-d803c071-acbc-40dd-bbc2-e2b9483491bd.jpg";
r_text[10] = "https://1.bp.blogspot.com/-0Cxn0KTS-18/YGwiFowneKI/AAAAAAAABLg/5liqQiAkrq8XVFCMYzr5u8Ns71JSOUuwACLcBGAsYHQ/s1280/Anime_Sad-7272833e-0cd7-43ed-bee7-7769c721ebbf.jpg";
r_text[11] = "https://1.bp.blogspot.com/-vlJJfmFnsl8/YGwiFtYdMJI/AAAAAAAABLk/hWI3BdJsJg8C4jNOrURtmnflC9ugZJ5_wCLcBGAsYHQ/s1750/Anime_girls-50c4489f-baa7-4178-a907-e609dff130fd.jpg";
r_text[12] = "https://1.bp.blogspot.com/-SuWSpm4F5h0/YGwcq_hwCxI/AAAAAAAABJE/XiBQ_t16x8EyU0bVhCx90QmaBIADtb6VQCLcBGAsYHQ/s2160/My_Hero_Academia-fb0378c7-4db8-40ca-9e1a-67060ae8441f.jpg";
r_text[13] = "https://1.bp.blogspot.com/-0m_GwRg0RuQ/YGwcp72h8_I/AAAAAAAABJA/jnv__JTAZsImzJPYdqdZZGY2BoAFyzmagCLcBGAsYHQ/s1920/Kanna-c0d26736-a68b-4879-9555-770d3478d53b.jpg";
r_text[14] = "https://1.bp.blogspot.com/-ofxRHRjkJbQ/YGwcprypYKI/AAAAAAAABI8/k7rXvT7Z5Ogpk6nIlZgj2pY02JjMz0-JACLcBGAsYHQ/s1920/Jujutsu_kaisen-c227b7f5-3b21-4027-9b18-d17615399459.jpg";
r_text[15] = "https://1.bp.blogspot.com/-A9WOoBB2v9s/YGwcpDF17nI/AAAAAAAABI0/gHHPE_vR9OA7OklqK3enzN9h-bR-HcrXQCLcBGAsYHQ/s1600/Jujutsu_Kaisen-51765c4e-2b80-450e-9cfb-c4e376d73ff2.jpg";
r_text[16] = "https://1.bp.blogspot.com/-5T2u3FiOcSU/YGwcpilzXtI/AAAAAAAABI4/DU3C1lhIxlExyj1XopXnBUbzGoyFemm7ACLcBGAsYHQ/s2160/Jujutsu_kaisen-3e842b7f-4d83-443b-8c31-7c382a34efae.jpg";
r_text[17] = "https://1.bp.blogspot.com/-ZEyUyLjmUjc/YGwcoxWKznI/AAAAAAAABIw/GPmAb90sMk0vejoREvtTWUyiG2TzYFQBQCLcBGAsYHQ/s1308/Itachi_Wallpaper_1-88e00f31-5835-45ab-8284-122d616c5807.jpg";
r_text[18] = "https://1.bp.blogspot.com/-rdwMdiulJz0/YGwcorx7erI/AAAAAAAABIs/L5tVq99OAkoPXm49aOiTVbuQLC6Stls8wCLcBGAsYHQ/s1837/Hunter_x_Hunter_-00189215-38f7-4e80-84ab-304bdc7149e0.jpg";
r_text[19] = "https://1.bp.blogspot.com/-qKYdm458204/YGwcoM1tfTI/AAAAAAAABIo/3N1o4ziGQG0_WAMdgoaB9Dp8ApamNnI6wCLcBGAsYHQ/s1280/Haikyuu-c0d60f3d-53c7-4b8f-9042-644cf1968722.jpg";
r_text[20] = "https://1.bp.blogspot.com/-O_qJASzXK2Q/YGwcoHRrVKI/AAAAAAAABIk/Fr9mow1VAcAmvkVzmBDMK7AL30wkfS8IgCLcBGAsYHQ/s1308/Death_note-070d069f-7352-41e7-a91d-a956f2aaa306.jpg";
r_text[21] = "https://1.bp.blogspot.com/-DiOFaIBHeZo/YGwcn6so-TI/AAAAAAAABIg/K-acN9arNqo3n1DQSoJVsGTmn8RVcvCNQCLcBGAsYHQ/s2156/Dabi-b38e2ec8-dbef-442f-ae47-a49153ca8f5a.jpg";
r_text[22] = "https://1.bp.blogspot.com/-vM2TZrviKZg/YGwcnbeT5jI/AAAAAAAABIc/I1ZkckYe_2EKFaJngBdjmDJrjgqO9wUXQCLcBGAsYHQ/s2048/Anime_wallpaper-ff0fbb72-0392-40be-8121-94c75596a0af.jpg";
r_text[23] = "https://1.bp.blogspot.com/-WugqeTkZiz8/YGwclpO3TyI/AAAAAAAABII/g95lAnVEchgESxsuFDmlu8hqw2KYz9xZQCLcBGAsYHQ/s1920/Anime_Wallpaper-7bc9460d-be80-4684-89b4-e0e3bb6cbb4a.jpg";
r_text[24] = "https://1.bp.blogspot.com/-uinH3yaUbK4/YGwcm0FR9GI/AAAAAAAABIY/b5gEy3tepfkigN_Xvr4U5r4taW66xkSHACLcBGAsYHQ/s2048/Anime_wallpaper-1e5529f2-5b9d-41ac-8df9-40dc8aad7e0f.jpg";
r_text[25] = "https://1.bp.blogspot.com/-VYasJADQdZE/YGwcmHEGbmI/AAAAAAAABIU/71lWaw9ZSyU24QcA8YGsh8_RffEjYFetgCLcBGAsYHQ/s1294/Anime_quote-60125d1a-dee6-43c0-a3e9-81009d6a872b.jpg";
r_text[26] = "https://1.bp.blogspot.com/-hJQeXUWfxGc/YGwcmAPdguI/AAAAAAAABIQ/fZSa4k7dT6MIG2dSr4LgPY0p5VPZLKzHwCLcBGAsYHQ/s1457/Anime_girl-247b5fda-c5f6-450d-9b3b-ff57491713d0.jpg";
r_text[27] = "https://1.bp.blogspot.com/-ven-1pxtLWI/YGwclNaHu6I/AAAAAAAABIE/2xmdYKjuQjoQQRyvBa5eKf1UtDI49p8YgCLcBGAsYHQ/s1846/Anime_Boy_Supreme-1de9dc11-8753-46c4-be86-5041b8fcf936.jpg";
r_text[28] = "https://1.bp.blogspot.com/-e9kLZMr3s4c/YGwcl8p5hwI/AAAAAAAABIM/-CgRZev9mpsONFY8vCZS12-YXukX3VgQACLcBGAsYHQ/s2160/Anime_boy-4bee930f-96af-4563-ac7f-7365eba7b855.jpg";
r_text[29] = "https://1.bp.blogspot.com/-Gzzl7bNNjks/YGwckHtkZPI/AAAAAAAABH8/X0AH9vBv2HMwZmOpznU0jSOzORXyNZG6QCLcBGAsYHQ/s1956/Anime_-bef65f2d-ea98-41b2-8605-b067d6568c9c.jpg";
r_text[30] = "https://1.bp.blogspot.com/-6xdan2xggCA/YGwckKiaSDI/AAAAAAAABIA/MTFZvraRZC0dnYaPlkSmx01RbiwVWeRAACLcBGAsYHQ/s2048/Anime-714dfe5b-5179-4f61-acb0-58b1acabe535.jpg";
r_text[31] = "https://1.bp.blogspot.com/-Xg5MqTMzPDE/YGwcj0P2QKI/AAAAAAAABH4/jpYnHanKrJ87ZOORwAFvsVRLxcuLn7gGgCLcBGAsYHQ/s1280/Anime-3e778950-6937-4687-a58e-1143c6f12ff4.jpg";
r_text[32] = "https://1.bp.blogspot.com/-kS93_DD_OzU/YGwcWDTce6I/AAAAAAAABH0/zmCvQcBGqmoUcc4iCNthLJqQSXiFVUkaQCLcBGAsYHQ/s1617/One_Punch_Man-641847f2-ceb9-4a2b-b0ff-1594ad18f4dd.jpg";
r_text[33] = "https://1.bp.blogspot.com/-1rRF6X9Y0qg/YGwgIXsZVbI/AAAAAAAABLA/hLAPFso4GJIx9nnBQ9fRc7ZLzOpoFuXbwCLcBGAsYHQ/s1853/Zero_Two-1902c546-801d-40b4-9835-ec4edfd3bfaf.jpg";
r_text[34] = "https://1.bp.blogspot.com/-LlU7UMONOhU/YGwgH00PdwI/AAAAAAAABK8/aIIuNaX9WGgjN2lHGlDhJepN4xKQBBLdwCLcBGAsYHQ/s2160/Your_name-bf0ad9ae-aba4-4926-9bbd-5f6b86bedfe5.jpg";
r_text[35] = "https://1.bp.blogspot.com/-hDG1YqmHSjM/YGwgHRNW0II/AAAAAAAABK0/frE_TIf_H08IJmNLl2aAddnl-Okviqf5QCLcBGAsYHQ/s1280/Tohru-0178a29f-1fe2-4638-9ba6-47fcd47e1ea0.jpg";
r_text[36] = "https://1.bp.blogspot.com/-tgQSYYtEe6Y/YGwgHQ1jVJI/AAAAAAAABK4/eyLDuZnJCpMSH4hAJmzMKsdulqG5-AR2QCLcBGAsYHQ/s1988/Shenron_Wallpaper-a215b36a-1b4f-409f-a4b1-6bfeaa67cc11.jpg";
r_text[37] = "https://1.bp.blogspot.com/-HfeFzJk0xqg/YGwgHEe4AmI/AAAAAAAABKw/EFkpLbNsgXoYr7NGQLkTq2TXg981QpLLQCLcBGAsYHQ/s2160/Samurai-a4808466-7d05-4de4-a52e-67e3c284cd72.jpg";
r_text[38] = "https://1.bp.blogspot.com/-IIhiSQKDuDg/YGwgGoRiLwI/AAAAAAAABKs/I3b79EGaxBwGox72GsmW_HtDY_lcy4xzQCLcBGAsYHQ/s2160/Samurai-7424b81f-a706-4abd-815b-1651d547e2e8.jpg";
r_text[39] = "https://1.bp.blogspot.com/-odPQt4Y7Jiw/YGwgGsUVyjI/AAAAAAAABKo/mcfzKO-PS98V9jLCdjWhI_sH0DdkH2PZQCLcBGAsYHQ/s1875/Oreki_x_Chitanda-703adfd5-044d-478d-bf99-98b94ffd2a53.jpg";
r_text[40] = "https://1.bp.blogspot.com/-KSUbn3f2qRg/YGwgFg3ObHI/AAAAAAAABKc/HG0Gtt46Q9ofCuVMcZXlXjSUyqpyHKKigCLcBGAsYHQ/s1920/One_Piece_Ace-3b8eab58-40fd-4aa7-873e-19b0e727fec1.jpg";
r_text[41] = "https://1.bp.blogspot.com/-_sqUyQbrZfo/YGwgGcYwvbI/AAAAAAAABKk/m9vzQ9lWWKE2v9l3XvQxTu7cF0FDXfLqACLcBGAsYHQ/s1280/One_piece_-541f5a68-968a-4fb3-9241-841e1dd664d2.jpg";
r_text[42] = "https://1.bp.blogspot.com/-IkADeH6D8X8/YGwgFh9nDkI/AAAAAAAABKg/LnZmOqScRssfyMB6F3VrA2v0J6aCuCKgACLcBGAsYHQ/s1280/One_piece-f5828855-7798-4c35-b8ee-417c0e3bbc13.jpg";
r_text[43] = "https://1.bp.blogspot.com/-CIGrFXoI7rU/YGwgFQiT4pI/AAAAAAAABKY/D1uCgcQvjV06w-ZKqRsEjd-dYjxF_x1zgCLcBGAsYHQ/s2160/Killua_Zoldyck-19a1032f-7eb5-4f5a-aaa0-e59f318e2eab.jpg";
r_text[44] = "https://1.bp.blogspot.com/-CMlxRk0mtNc/YGwgE4fJ33I/AAAAAAAABKU/G_V1dn-rkhYF051sv7bIArUohv0GCaKQQCLcBGAsYHQ/s2160/Inosuke_-87633849-77ba-4505-88be-bf73e2317fe8.jpg";
r_text[45] = "https://1.bp.blogspot.com/-NvrYPul8720/YGwgE3mkC8I/AAAAAAAABKQ/lQ5kbmAimK4rbcLUhOA6oK0rh5FguH_awCLcBGAsYHQ/s1476/Hyouka-10b732b0-a55f-49e2-9680-d0ab2e6d5ffb.jpg";
r_text[46] = "https://1.bp.blogspot.com/-xqFdSlKJQDw/YGwgEujSwXI/AAAAAAAABKM/MBcJ3cT6NWQwKzBwRrG5GrbqAnf_WdnJwCLcBGAsYHQ/s1802/Hunter_x_Hunter_-748a275d-404f-4f57-b983-d8b28e52cf1a.jpg";
r_text[47] = "https://1.bp.blogspot.com/-4BJsweIJ-IM/YGwgEBAymfI/AAAAAAAABKE/Nkih4DMZMAU4IyzVMR4wGW21z4i0aB9JQCLcBGAsYHQ/s1291/Hunter_x_Hunter_-1cc86497-95aa-4556-8c5f-92758fd0a6ca.jpg";
r_text[48] = "https://1.bp.blogspot.com/-yr8zyjvUiEs/YGwgEBHGWfI/AAAAAAAABKI/aWKFcAVk2TsTiBVOYNoW9ajXbm_n4uXHACLcBGAsYHQ/s1430/Hunter_X_Hunter-f67db6f3-fe7d-43e1-a8c7-91fdf30ce79f.jpg";
r_text[49] = "https://1.bp.blogspot.com/-EabLym6Bvc8/YGwgD7Y8oPI/AAAAAAAABKA/O7FJKoB6Boo1tS4mu1IpITW8xK4-45wTgCLcBGAsYHQ/s2160/Hunter_Neferpitou-27a232f2-0781-44cb-8e0e-7f4ec9f85c1c.jpg";
r_text[50] = "https://1.bp.blogspot.com/-9KRXETamMpo/YGwgC_pO1YI/AAAAAAAABJ4/_h_gHySl1m8QsXwlGdz60i99Kaf5Y2M6ACLcBGAsYHQ/s1812/Dragon_maid-9dad9a59-085e-4c1f-8155-d837d4dfe82c.jpg";
r_text[51] = "https://1.bp.blogspot.com/-1YBQw6qwAYo/YGwgC2CnfGI/AAAAAAAABJ0/2uXnVvonXv0Uieg-iqtcgGInATfkxapLACLcBGAsYHQ/s1704/Black_Goku_-_Zamasu-2004771d-5b79-45f4-bb52-597897421a98.jpg";
r_text[52] = "https://1.bp.blogspot.com/-6P2I9P8pBZE/YGwgC8pecYI/AAAAAAAABJ8/8kJBSBgY3hYJBeVgcSXRsKi5X7iGwIeyACLcBGAsYHQ/s2160/02_-9db21c58-d5fd-40d7-9612-7ddef42d0d87.jpg";
        var i = Math.floor(53*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*Here is your wallpaper* 🐥'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'aniwall', fromMe: false, desc: AN_DESC}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "https://1.bp.blogspot.com/-d99vxv6NUCY/YGwcsSLaPhI/AAAAAAAABJU/nuhGryXFVxwPvTd3ai7k_WF1Sturxty4gCLcBGAsYHQ/s1280/UMARU-CHAN_WALLPAPER-5bd205dd-bfd2-4603-9ff1-1c06ff6d4b87.jpg";
r_text[1] = "https://1.bp.blogspot.com/-AjjazFRjhcs/YGwcsR24crI/AAAAAAAABJQ/QJkf_nkHvLcQ2bN1AC3X9wIUHUD-qrLXQCLcBGAsYHQ/s2160/Toga_-14b5431c-f62b-4b88-825a-f5f1167d9e5c.jpg";
r_text[2] = "https://1.bp.blogspot.com/-1bGr3bv9mGg/YGwcrrBAcEI/AAAAAAAABJM/7z9FpQMFQ2YJHu_eDEnBowSJyCWFHfF7ACLcBGAsYHQ/s2160/Shoto_Todoroki-e00cabe8-4c6e-40de-947f-9f2a62851fe0.jpg";
r_text[3] = "https://1.bp.blogspot.com/-D3666BDwFCA/YGwcq9n_I_I/AAAAAAAABJI/WmCcKrJrYQUjt48JhVswAUe0jQiUYcfrwCLcBGAsYHQ/s1920/Night_Silence-3ffdf5a4-2b9f-4789-a76b-1c36ed71f78b.jpg";
r_text[4] = "https://1.bp.blogspot.com/-31IinULlqY8/YGwiHszVRaI/AAAAAAAABL8/E0_iWyW8zZYr48ybGSVXozmUzVTBTKmUgCLcBGAsYHQ/s1920/Rem_ReZero_Moon-e224f09e-8619-4df5-b691-02290b63e786.jpg";
r_text[5] = "https://1.bp.blogspot.com/-5P2CHARlBWk/YGwiHYyB6LI/AAAAAAAABL4/ExrK1yy9YNEpU_An9IuLch6qpQUx8OxZgCLcBGAsYHQ/s1440/Rem_ReZero-1a3f7554-43a6-4723-aff7-6c7662f5e2fb.jpg"; 
r_text[6] = "https://1.bp.blogspot.com/-NmHbiu76xpE/YGwiHcAepbI/AAAAAAAABL0/r9Whi2Gulh48MEKQu5buN-3ZYT4aYO5QwCLcBGAsYHQ/s1875/Oreki_x_Chitanda-703adfd5-044d-478d-bf99-98b94ffd2a53.jpg";
r_text[7] = "https://1.bp.blogspot.com/-Gj4MsIbiSAc/YGwiHNh7xFI/AAAAAAAABLw/bzuiFoK_2ss60L9ESfhlGXnWRYCMr-slQCLcBGAsYHQ/s1476/Hyouka-10b732b0-a55f-49e2-9680-d0ab2e6d5ffb.jpg";
r_text[8] = "https://1.bp.blogspot.com/-dAVzfsRqJSQ/YGwiFitPvQI/AAAAAAAABLo/waMZXRlq0mINwKCXOS7RTiZSfW05tFDcACLcBGAsYHQ/s2160/Cowboy_bebop_-bbcfe180-dc5c-47e9-9e24-3c01380fb3f7.jpg";
r_text[9] = "https://1.bp.blogspot.com/-MERaFRaoX7w/YGwiGiEYICI/AAAAAAAABLs/XnspAmMGp4w27McQFpozZk7yn3JhrjyLACLcBGAsYHQ/s1920/Cowboy_bebop_2-d803c071-acbc-40dd-bbc2-e2b9483491bd.jpg";
r_text[10] = "https://1.bp.blogspot.com/-0Cxn0KTS-18/YGwiFowneKI/AAAAAAAABLg/5liqQiAkrq8XVFCMYzr5u8Ns71JSOUuwACLcBGAsYHQ/s1280/Anime_Sad-7272833e-0cd7-43ed-bee7-7769c721ebbf.jpg";
r_text[11] = "https://1.bp.blogspot.com/-vlJJfmFnsl8/YGwiFtYdMJI/AAAAAAAABLk/hWI3BdJsJg8C4jNOrURtmnflC9ugZJ5_wCLcBGAsYHQ/s1750/Anime_girls-50c4489f-baa7-4178-a907-e609dff130fd.jpg";
r_text[12] = "https://1.bp.blogspot.com/-SuWSpm4F5h0/YGwcq_hwCxI/AAAAAAAABJE/XiBQ_t16x8EyU0bVhCx90QmaBIADtb6VQCLcBGAsYHQ/s2160/My_Hero_Academia-fb0378c7-4db8-40ca-9e1a-67060ae8441f.jpg";
r_text[13] = "https://1.bp.blogspot.com/-0m_GwRg0RuQ/YGwcp72h8_I/AAAAAAAABJA/jnv__JTAZsImzJPYdqdZZGY2BoAFyzmagCLcBGAsYHQ/s1920/Kanna-c0d26736-a68b-4879-9555-770d3478d53b.jpg";
r_text[14] = "https://1.bp.blogspot.com/-ofxRHRjkJbQ/YGwcprypYKI/AAAAAAAABI8/k7rXvT7Z5Ogpk6nIlZgj2pY02JjMz0-JACLcBGAsYHQ/s1920/Jujutsu_kaisen-c227b7f5-3b21-4027-9b18-d17615399459.jpg";
r_text[15] = "https://1.bp.blogspot.com/-A9WOoBB2v9s/YGwcpDF17nI/AAAAAAAABI0/gHHPE_vR9OA7OklqK3enzN9h-bR-HcrXQCLcBGAsYHQ/s1600/Jujutsu_Kaisen-51765c4e-2b80-450e-9cfb-c4e376d73ff2.jpg";
r_text[16] = "https://1.bp.blogspot.com/-5T2u3FiOcSU/YGwcpilzXtI/AAAAAAAABI4/DU3C1lhIxlExyj1XopXnBUbzGoyFemm7ACLcBGAsYHQ/s2160/Jujutsu_kaisen-3e842b7f-4d83-443b-8c31-7c382a34efae.jpg";
r_text[17] = "https://1.bp.blogspot.com/-ZEyUyLjmUjc/YGwcoxWKznI/AAAAAAAABIw/GPmAb90sMk0vejoREvtTWUyiG2TzYFQBQCLcBGAsYHQ/s1308/Itachi_Wallpaper_1-88e00f31-5835-45ab-8284-122d616c5807.jpg";
r_text[18] = "https://1.bp.blogspot.com/-rdwMdiulJz0/YGwcorx7erI/AAAAAAAABIs/L5tVq99OAkoPXm49aOiTVbuQLC6Stls8wCLcBGAsYHQ/s1837/Hunter_x_Hunter_-00189215-38f7-4e80-84ab-304bdc7149e0.jpg";
r_text[19] = "https://1.bp.blogspot.com/-qKYdm458204/YGwcoM1tfTI/AAAAAAAABIo/3N1o4ziGQG0_WAMdgoaB9Dp8ApamNnI6wCLcBGAsYHQ/s1280/Haikyuu-c0d60f3d-53c7-4b8f-9042-644cf1968722.jpg";
r_text[20] = "https://1.bp.blogspot.com/-O_qJASzXK2Q/YGwcoHRrVKI/AAAAAAAABIk/Fr9mow1VAcAmvkVzmBDMK7AL30wkfS8IgCLcBGAsYHQ/s1308/Death_note-070d069f-7352-41e7-a91d-a956f2aaa306.jpg";
r_text[21] = "https://1.bp.blogspot.com/-DiOFaIBHeZo/YGwcn6so-TI/AAAAAAAABIg/K-acN9arNqo3n1DQSoJVsGTmn8RVcvCNQCLcBGAsYHQ/s2156/Dabi-b38e2ec8-dbef-442f-ae47-a49153ca8f5a.jpg";
r_text[22] = "https://1.bp.blogspot.com/-vM2TZrviKZg/YGwcnbeT5jI/AAAAAAAABIc/I1ZkckYe_2EKFaJngBdjmDJrjgqO9wUXQCLcBGAsYHQ/s2048/Anime_wallpaper-ff0fbb72-0392-40be-8121-94c75596a0af.jpg";
r_text[23] = "https://1.bp.blogspot.com/-WugqeTkZiz8/YGwclpO3TyI/AAAAAAAABII/g95lAnVEchgESxsuFDmlu8hqw2KYz9xZQCLcBGAsYHQ/s1920/Anime_Wallpaper-7bc9460d-be80-4684-89b4-e0e3bb6cbb4a.jpg";
r_text[24] = "https://1.bp.blogspot.com/-uinH3yaUbK4/YGwcm0FR9GI/AAAAAAAABIY/b5gEy3tepfkigN_Xvr4U5r4taW66xkSHACLcBGAsYHQ/s2048/Anime_wallpaper-1e5529f2-5b9d-41ac-8df9-40dc8aad7e0f.jpg";
r_text[25] = "https://1.bp.blogspot.com/-VYasJADQdZE/YGwcmHEGbmI/AAAAAAAABIU/71lWaw9ZSyU24QcA8YGsh8_RffEjYFetgCLcBGAsYHQ/s1294/Anime_quote-60125d1a-dee6-43c0-a3e9-81009d6a872b.jpg";
r_text[26] = "https://1.bp.blogspot.com/-hJQeXUWfxGc/YGwcmAPdguI/AAAAAAAABIQ/fZSa4k7dT6MIG2dSr4LgPY0p5VPZLKzHwCLcBGAsYHQ/s1457/Anime_girl-247b5fda-c5f6-450d-9b3b-ff57491713d0.jpg";
r_text[27] = "https://1.bp.blogspot.com/-ven-1pxtLWI/YGwclNaHu6I/AAAAAAAABIE/2xmdYKjuQjoQQRyvBa5eKf1UtDI49p8YgCLcBGAsYHQ/s1846/Anime_Boy_Supreme-1de9dc11-8753-46c4-be86-5041b8fcf936.jpg";
r_text[28] = "https://1.bp.blogspot.com/-e9kLZMr3s4c/YGwcl8p5hwI/AAAAAAAABIM/-CgRZev9mpsONFY8vCZS12-YXukX3VgQACLcBGAsYHQ/s2160/Anime_boy-4bee930f-96af-4563-ac7f-7365eba7b855.jpg";
r_text[29] = "https://1.bp.blogspot.com/-Gzzl7bNNjks/YGwckHtkZPI/AAAAAAAABH8/X0AH9vBv2HMwZmOpznU0jSOzORXyNZG6QCLcBGAsYHQ/s1956/Anime_-bef65f2d-ea98-41b2-8605-b067d6568c9c.jpg";
r_text[30] = "https://1.bp.blogspot.com/-6xdan2xggCA/YGwckKiaSDI/AAAAAAAABIA/MTFZvraRZC0dnYaPlkSmx01RbiwVWeRAACLcBGAsYHQ/s2048/Anime-714dfe5b-5179-4f61-acb0-58b1acabe535.jpg";
r_text[31] = "https://1.bp.blogspot.com/-Xg5MqTMzPDE/YGwcj0P2QKI/AAAAAAAABH4/jpYnHanKrJ87ZOORwAFvsVRLxcuLn7gGgCLcBGAsYHQ/s1280/Anime-3e778950-6937-4687-a58e-1143c6f12ff4.jpg";
r_text[32] = "https://1.bp.blogspot.com/-kS93_DD_OzU/YGwcWDTce6I/AAAAAAAABH0/zmCvQcBGqmoUcc4iCNthLJqQSXiFVUkaQCLcBGAsYHQ/s1617/One_Punch_Man-641847f2-ceb9-4a2b-b0ff-1594ad18f4dd.jpg";
r_text[33] = "https://1.bp.blogspot.com/-1rRF6X9Y0qg/YGwgIXsZVbI/AAAAAAAABLA/hLAPFso4GJIx9nnBQ9fRc7ZLzOpoFuXbwCLcBGAsYHQ/s1853/Zero_Two-1902c546-801d-40b4-9835-ec4edfd3bfaf.jpg";
r_text[34] = "https://1.bp.blogspot.com/-LlU7UMONOhU/YGwgH00PdwI/AAAAAAAABK8/aIIuNaX9WGgjN2lHGlDhJepN4xKQBBLdwCLcBGAsYHQ/s2160/Your_name-bf0ad9ae-aba4-4926-9bbd-5f6b86bedfe5.jpg";
r_text[35] = "https://1.bp.blogspot.com/-hDG1YqmHSjM/YGwgHRNW0II/AAAAAAAABK0/frE_TIf_H08IJmNLl2aAddnl-Okviqf5QCLcBGAsYHQ/s1280/Tohru-0178a29f-1fe2-4638-9ba6-47fcd47e1ea0.jpg";
r_text[36] = "https://1.bp.blogspot.com/-tgQSYYtEe6Y/YGwgHQ1jVJI/AAAAAAAABK4/eyLDuZnJCpMSH4hAJmzMKsdulqG5-AR2QCLcBGAsYHQ/s1988/Shenron_Wallpaper-a215b36a-1b4f-409f-a4b1-6bfeaa67cc11.jpg";
r_text[37] = "https://1.bp.blogspot.com/-HfeFzJk0xqg/YGwgHEe4AmI/AAAAAAAABKw/EFkpLbNsgXoYr7NGQLkTq2TXg981QpLLQCLcBGAsYHQ/s2160/Samurai-a4808466-7d05-4de4-a52e-67e3c284cd72.jpg";
r_text[38] = "https://1.bp.blogspot.com/-IIhiSQKDuDg/YGwgGoRiLwI/AAAAAAAABKs/I3b79EGaxBwGox72GsmW_HtDY_lcy4xzQCLcBGAsYHQ/s2160/Samurai-7424b81f-a706-4abd-815b-1651d547e2e8.jpg";
r_text[39] = "https://1.bp.blogspot.com/-odPQt4Y7Jiw/YGwgGsUVyjI/AAAAAAAABKo/mcfzKO-PS98V9jLCdjWhI_sH0DdkH2PZQCLcBGAsYHQ/s1875/Oreki_x_Chitanda-703adfd5-044d-478d-bf99-98b94ffd2a53.jpg";
r_text[40] = "https://1.bp.blogspot.com/-KSUbn3f2qRg/YGwgFg3ObHI/AAAAAAAABKc/HG0Gtt46Q9ofCuVMcZXlXjSUyqpyHKKigCLcBGAsYHQ/s1920/One_Piece_Ace-3b8eab58-40fd-4aa7-873e-19b0e727fec1.jpg";
r_text[41] = "https://1.bp.blogspot.com/-_sqUyQbrZfo/YGwgGcYwvbI/AAAAAAAABKk/m9vzQ9lWWKE2v9l3XvQxTu7cF0FDXfLqACLcBGAsYHQ/s1280/One_piece_-541f5a68-968a-4fb3-9241-841e1dd664d2.jpg";
r_text[42] = "https://1.bp.blogspot.com/-IkADeH6D8X8/YGwgFh9nDkI/AAAAAAAABKg/LnZmOqScRssfyMB6F3VrA2v0J6aCuCKgACLcBGAsYHQ/s1280/One_piece-f5828855-7798-4c35-b8ee-417c0e3bbc13.jpg";
r_text[43] = "https://1.bp.blogspot.com/-CIGrFXoI7rU/YGwgFQiT4pI/AAAAAAAABKY/D1uCgcQvjV06w-ZKqRsEjd-dYjxF_x1zgCLcBGAsYHQ/s2160/Killua_Zoldyck-19a1032f-7eb5-4f5a-aaa0-e59f318e2eab.jpg";
r_text[44] = "https://1.bp.blogspot.com/-CMlxRk0mtNc/YGwgE4fJ33I/AAAAAAAABKU/G_V1dn-rkhYF051sv7bIArUohv0GCaKQQCLcBGAsYHQ/s2160/Inosuke_-87633849-77ba-4505-88be-bf73e2317fe8.jpg";
r_text[45] = "https://1.bp.blogspot.com/-NvrYPul8720/YGwgE3mkC8I/AAAAAAAABKQ/lQ5kbmAimK4rbcLUhOA6oK0rh5FguH_awCLcBGAsYHQ/s1476/Hyouka-10b732b0-a55f-49e2-9680-d0ab2e6d5ffb.jpg";
r_text[46] = "https://1.bp.blogspot.com/-xqFdSlKJQDw/YGwgEujSwXI/AAAAAAAABKM/MBcJ3cT6NWQwKzBwRrG5GrbqAnf_WdnJwCLcBGAsYHQ/s1802/Hunter_x_Hunter_-748a275d-404f-4f57-b983-d8b28e52cf1a.jpg";
r_text[47] = "https://1.bp.blogspot.com/-4BJsweIJ-IM/YGwgEBAymfI/AAAAAAAABKE/Nkih4DMZMAU4IyzVMR4wGW21z4i0aB9JQCLcBGAsYHQ/s1291/Hunter_x_Hunter_-1cc86497-95aa-4556-8c5f-92758fd0a6ca.jpg";
r_text[48] = "https://1.bp.blogspot.com/-yr8zyjvUiEs/YGwgEBHGWfI/AAAAAAAABKI/aWKFcAVk2TsTiBVOYNoW9ajXbm_n4uXHACLcBGAsYHQ/s1430/Hunter_X_Hunter-f67db6f3-fe7d-43e1-a8c7-91fdf30ce79f.jpg";
r_text[49] = "https://1.bp.blogspot.com/-EabLym6Bvc8/YGwgD7Y8oPI/AAAAAAAABKA/O7FJKoB6Boo1tS4mu1IpITW8xK4-45wTgCLcBGAsYHQ/s2160/Hunter_Neferpitou-27a232f2-0781-44cb-8e0e-7f4ec9f85c1c.jpg";
r_text[50] = "https://1.bp.blogspot.com/-9KRXETamMpo/YGwgC_pO1YI/AAAAAAAABJ4/_h_gHySl1m8QsXwlGdz60i99Kaf5Y2M6ACLcBGAsYHQ/s1812/Dragon_maid-9dad9a59-085e-4c1f-8155-d837d4dfe82c.jpg";
r_text[51] = "https://1.bp.blogspot.com/-1YBQw6qwAYo/YGwgC2CnfGI/AAAAAAAABJ0/2uXnVvonXv0Uieg-iqtcgGInATfkxapLACLcBGAsYHQ/s1704/Black_Goku_-_Zamasu-2004771d-5b79-45f4-bb52-597897421a98.jpg";
r_text[52] = "https://1.bp.blogspot.com/-6P2I9P8pBZE/YGwgC8pecYI/AAAAAAAABJ8/8kJBSBgY3hYJBeVgcSXRsKi5X7iGwIeyACLcBGAsYHQ/s2160/02_-9db21c58-d5fd-40d7-9612-7ddef42d0d87.jpg";
        var i = Math.floor(53*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*Here is your wallpaper* 🐥'})

    }));
}
