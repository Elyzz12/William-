//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "+234 814 993 9219";
global.owner = process.env.OWNER_NUMBER || "+234 814 993 9219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01WajhHd0dmOVduRTFNM0Z5ODlYWm9JcE9SZnArNGtHZFhBUUllaHdYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVU4eEdKUUtRNkZ6ZURFdURMUHZrM0xxajFDYjFaZ2dxNFVBZ2hvdW9CND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTkw0RDdGU3ZycWZjZTJQMGx4b05NMEVWZnhZaVQ0YnU0Z2d6RS9MMjBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNNWVzS2FFcE5iaWtGczdwTktNWWZaN1F1enZXVjNzNkFFUWNTUk5BYzNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGNzhvSktqMmNJT0xrbGhzUjBSZVZjUnVjVHZEL2hCRDE5bDdYWUJFM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR2SXZQUEZSdlVQb1J5VmI2Zzc1UG9Td1JYdmx5QmRpckxwajVIMmJ2bmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1A3dGk5djBDQk91UWFDM21hamR6UFp5VlNuWlBNK0w3OHpPd1l5cnUzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzY3L3ZDYktiQ1dkelZUSFp4NkNvZ2RkcGVaMmtXaFhPblZ2WERjZDBVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJMSHBYUHNOYXFRdHdsKzk0UndiNG84dmo1ZG5GcTdTaURJTmxnbWV2Wm05b01TQm15UmthT0N4c0FDWG1hUHN4M1UzSEJuWHNrWUU3L0RsblE0M2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJVOVYrdHhmTGJrVTRIRzdQaWhBa1pqcEN6ZVJwRXNhczQ5dG1tblV6RE53PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNQTDkwdllFRUxMb2lya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIydERjdHI5NkVTRU9GWDJmZ1hITG5leXcwSC9OMVRkazJXMm01RzlXd2dzPSIsImFjY291bnRTaWduYXR1cmUiOiJUd2pTUHc2b2pVT2I2aGhMRDlQZmE3K1NYa1c3d09Jai9MWHNzODZQRzRpbGJiU2ZlWmhleFdJS29TU0lFRHp2b3N6bGtEdjF4ZDl6dk1DNVMrRUZCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMnJUejVlcmEwWm41THJkNmtTZFJjbHpKb0xqekJiU28vcXZRZjF4R3ZLTTdmbzBuYTEyc20wU3JOTTEwc2NabVg4YkNaK1c4TzhSR2J5UFB1YWd6alE9PSJ9LCJtZSI6eyJpZCI6IjIzNDgxNDk5MzkyMTk6NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExMzgxNzAzNjA0MjQyODo2QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ5OTM5MjE5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHJRM0xhL2VoRWhEaFY5bjRGeHk1M3NzTkIvemRVM1pObHRwdVJ2VnNJTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwMzI3NjE4LCJsYXN0UHJvcEhhc2giOiIzQThyRmcifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Aetherist | 🌀þ`",
  author: process.env.PACK_AUTHER || "Aetherist | 🌀",
  packname: process.env.PACK_NAME || "null",
  botname: process.env.BOT_NAME || "QUEEN_NIhttp://wbnv.in/a/c9ibVHJ

*mine*

http://wbnv.in/a/1dibVJ7

*smiffs*",
  ownername: process.env.OWNER_NAME || "Aetherist | 🌀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
