module.exports = {
config: {
  name: "yt",
  version: "0.0.2",
  permission: 0,
  prefix: true,
  credits: "Nayan",
  description: "fb video",
  category: "user",
  usages: "",
    cooldowns: 5,
},





start: async function({ nayan, events, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { ytdown, ndown, tikdown, twitterdown } = require("nayan-media-downloader")
    const { messageID, threadID } = events;
  if (!args[0]) return nayan.sendMessage("এই লিংক তোর বাপ দিবে ? লিংক দে ", threadID, messageID);


    let np = args.join(" ");
   if (!args[1]) nayan.sendMessage(`🥶 দারাও ভাতিজা নামাচ্ছি নামাতে দেও  𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...`, events.threadID, (err, info) => setTimeout(() => { nayan.unsendMessage(info.messageID) }, 20000));

 try {
    const res = await ytdown(`${np}`);
   console.log(res)
    var data = res.data.data;
    var msg = [];
    let img1 = `${res.data.video}`;
    let ti = `${res.data.title}`;

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/fbvideo.mp4", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/fbvideo.mp4"));

    {
        msg += `✅5 টাকা দে এখন ফ্রি তে ডাউনলোড করে দিছি শালা  Successfully\n🔰TITLE : ${ti}`
    }

    return nayan.reply({
        body: msg,
        attachment: allimage
    }, events.threadID, events.messageID);
} catch (err) {
    nayan.reply(`error`, events.threadID, events.messageID);  
   }
}
}
