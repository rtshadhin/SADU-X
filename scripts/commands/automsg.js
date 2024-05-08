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
    message: ['কুটিপুতি পোলা আমি কুটিপতি পোলা 🌚']
},
             {
    timer: '1:00:00 AM',
    message: ['যা ইচ্ছা করো টয়লেটে বেশিখন থাইকো না 🤓 only Boys']
},
						{
    timer: '2:00:00 AM',
    message: ['😴Kaw Nai']
},
						 {
    timer: '3:00:00 AM',
    message: ['']
},
						 {
    timer: '4:00:00 AM',
    message: ['']
},
						 {
    timer: '5:00:00 AM',
    message: ['😒']
},
						 {
    timer: '6:00:00 AM',
    message: ['']
},
						 {
    timer: '7:00:00 AM',
    message: ['এ জারুয়া ঘুম থেকে উঠবি না ']
},
						 {
    timer: '8:00:00 AM',
    message: ['']
},
						 {
    timer: '9:00:00 AM',
    message: ['']
},
             {
    timer: '10:00:00 AM',
    message: ['Ami Heroalom 😒']
},
						 {
    timer: '11:00:00 AM',
    message: ['hi all Koi Tomra 😒']
},
						 {
    timer: '12:00:00 PM',
    message: [' আসসালামুয়ালাইকুম🌼 কি অবস্থা সবার আমি বট API ']
},					
						 {
    timer: '1:00:00 PM',
    message: ['আমি একটি Massager Robotআমাকে ব্যবহার করার জন্য bot এটা বলে কিছু জিগ্নেস করবেন bot ke koto bot hi bot mama ']
},
						 {
    timer: '2:00:00 PM',
    message: ['আমাকে ব্যবহার করতে bot বলে কিছু জিগ্নেস করুন']
},
						 {
    timer: '3:00:00 PM',
    message: ['2:00']
},
						 {
    timer: '4:00:00 PM',
    message: ['valo Aso Sobai 😁']
},
						{
    timer: '5:00:00 PM',
    message: ['Bow need 😭']
},
						 {
    timer: '6:00:00 PM',
    message: ['মুরগি ডাকে ভে ভে']
},
						 {
    timer: '7:00:00 PM',
    message: [' 😗 Kamon Aso Sobai ']
},
             {
    timer: '8:00:00 PM',
    message: ['তোমাদের অনেক কুরকুরি আছে ব্রো ! এতো কুরকুরি আগে জানতাম না ']
},
             {
    timer: '9:00:00 PM',
    message: ['Hi All Use Me /bot bot ke koro ']
},
             {
    timer: '10:00:00 PM',
    message: ['ঐ দেখা যায় তাল গাছ ঐ আমাদের গা ঐ খানেতে বাশ করে এডমিনের বাচ্চা😒😁']
},
            {
    timer: '11:00:00 PM',
    message: ['আমার এই সপ্ন কে শুধু 😩 সপ্ন হয়ে হাসাবে আমায়! এমন সাহস নেই আমার🙁! এইভাবেই তাকে প্রস্তাব জনাই 😔']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
