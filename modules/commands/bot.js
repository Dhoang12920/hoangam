module.exports.config = {
  name: "bot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của Bot",
      "Đừng mong chờ gì từ Bot.",
      "Cái đoạn này á? Của Bot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject và Dhoang nhúng tay vào.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, Bot Dhoang là ví dụ.",
      "Lưu Đắc Hoàng đẹp zoai.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Đưa não cho mà dùng nè👈
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "Bot Dhoang có thể hiểu phụ nữ nhưng không thể có được họ.",
      "Bot Dhoang cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.imgur.com/gyuryMk.png",
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix hệ thống: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot has been working for ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)\n\n» Total users: ${global.data.allUserID.length} \n» Total threads: ${global.data.allThreadID.length}\n──────────────\n[Bạn có biết?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};

