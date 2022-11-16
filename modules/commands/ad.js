module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "Admin",
  cooldowns: 10,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://scontent.xx.fbcdn.net/v/t1.15752-9/280399646_569250571222162_3329029821315085713_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=QOR36aKJAwEAX_0lCwZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKiLH06DS7FlSQ9LQJrXlqaeQ4-bqWAv2eMDi_c8GPcbQ&oe=62AE3FF4" ];
  var callback = () => api.sendMessage({body:`Thông Tin Admin Bot
  👀 Tên: Lưu Đắc Hoàng
  ❎ Tuổi: 18t
  👤 Giới tính: Nam
  🙄 Sinh ngày: 22-12-2004
  💫 Chiều cao / cân nặng: 1m66 / 49kg
  💘 Mối quan hệ:  Ế BỀN VỮNG
  😎 Quê quán: Hà Nội
  🤔 Nơi ở: Chương Mỹ - Hà Nội
  🌸 Cung: Ma kết
  👫 Gu: Thế lào cũng được vì ế lâu đag vã
  🌸 Tính cách: Lạnh Lùng Boaiz và Ít Nói🤣
  📱 Facebook: https://www.facebook.com/hoangam204
[ ⚜️ ]=== [  Bot Dhoang] ===[ ⚜️ ]
📢 Những Lưu Ý Cho Những Bạn Dùng Bot Của Mình Neee 😏
[ 🦈 ] Vui lòng không spam khi sử dụng để tránh die bot 🍂
[ 🦈 ] Hạn Chế Sử Dụng Không Dùng Quá 5 Lần / 120s 🧸
[ 🦈 ] Sử Dụng Bot Sẽ Không Bị Band Nhưng Hạn Chế Spam Để Tránh Die Bot 🛡️
[ 🦈 ]  Đừng Report Bot Vì Bot Quản Trị Viên Bạn Bỏ Tiền Ra Bot Die Coi Như Mất Tiền
[ 🦈 ]  Nếu Bot Lỗi Hay Không Hoạt Động Thì Nhắn Tin Liên Hệ Admin Bot 👑
=> Admin Bot Thanks Các Bạn Đã Lựa Chọn Bot Này Để Sử Dụng 💞
[ ⚜️ ]=== [  Bot Dhoang ] ===[ ⚜️ ]
Nếu Bạn Thích Sử Dụng Bot Của Dhoang

💳MB:       Không Noái
💳VIB:       Không Cóa
🪙MoMo: *************

[ ⚜️ ]=== [  Bot Dhoang ] ===[ ⚜️ ]`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };