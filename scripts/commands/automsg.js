module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['Hey Bro You Know? You Gay ?']
},
             {
    timer: '1:00:00 AM',
    message: ['যা ইচ্ছা করো টয়লেটে বেশিখন থাইকো না 🤓 only Boys']
},
						{
    timer: '2:00:00 AM',
    message: ['🕺']
},
						 {
    timer: '3:00:00 AM',
    message: ['Ke mama Gumaba na ?']
},
						 {
    timer: '4:00:00 AM',
    message: [' ঘুমাও ঘুমাও 😒 ']
},
						 {
    timer: '5:00:00 AM',
    message: ['😬']
},
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৬টা বাজে ঘুম থেকে উঠো সবাই  ']
},
						 {
    timer: '8:00:00 AM',
    message: ['~এখন সকাল ৭টা বাজে সবাই ব্রেকফাস্ট করে নাও😊 ']
},
						 {
    timer: '9:00:00 AM',
    message: ['~এখন সকাল ৮ টা বাজে সবাই মনে হয় কাজে ব্যস্ত হয়ে গেছো ']
},
             {
    timer: '10:00:00 AM',
    message: ['~এখন সকাল ৯ টা বাজে মন দিয়ে কাজ করো সবাই❤️' ]
},
						 {
    timer: '11:00:00 AM',
    message: [' কি পৃথিবী 😄 একজন বোকা 😄 একজন ভালো 😄একজন খারাপ 😄একজন বেইমান 😄 একজন রাগি 😄 একজন সুস্থ 😄 একজন অসুস্থ 😄 কি আজব  ']
},
						 {
    timer: '12:00:00 PM',
    message: [' আসসালামুয়ালাইকুম🌼 কি অবস্থা সবার আমি বট API ']
},					
						 {
    timer: '1:00:00 PM',
    message: [' পরোকালের কি অবস্থা? ']
},
						 {
    timer: '2:00:00 PM',
    message: [' 😫 সাদিয়া কই তুমি ঃ ']
},
						 {
    timer: '3:00:00 PM',
    message: ['TM- 2:00 ']
},
						 {
    timer: '4:00:00 PM',
    message: ['Time- 3:00']
},
						{
    timer: '5:00:00 PM',
    message: [' Boy ❌ Man ✅ ']
},
						 {
    timer: '6:00:00 PM',
    message: ['Woman ❌ মহিলা ✅']
},
						 {
    timer: '7:00:00 PM',
    message: [' 😗 Kamon Aso Sobai ']
},
             {
    timer: '8:00:00 PM',
    message: ['Time 7:00']
},
             {
    timer: '9:00:00 PM',
    message: [' 8:00 ']
},
             {
    timer: '10:00:00 PM',
    message: [' life very simple brother সাধারণ ভাবে জীবনযাপন করো জীবনে শান্তিতে থাকতে পারবে ! প্রেম পিরিত,গেনজাম,টাকা, এগুলো পিছনে পরে নিজেকে নস্ট কইরো না 😅 মানুষ=জানোয়ার ✅ কথটা একদিন হলেও মনে পরবে ']
},
            {
    timer: '11:00:00 PM',
    message: [' একবার জাস্ট একবার এখনি চোখ বন্ধ করো! মাইন্ড ফ্রেস করো! নিরবে ভাবো তোমার পরোকালের জন্য কি তোমার কাছে কি আছে ? Uff দিনে ২বার হেন্ডেল, সারাদিন মেয়েদের পিছনে পরে থাকা,লাস্ট কবে ইচ্ছাকৃত ভাবে নামাজে গেছিলে মনে আছে ? হাজারো মিথ্যে কথা বলছি, একটা আমার এই কথাগুলো তখনি বুজতে পারবে যখন তার জ্ঞান হবে 😅 কি অবস্থা পৃথিবীর আল্লাহ ভালোমানুষদের রখ্খা করো  ']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
