const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087627937";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_50_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxHQjg3SWIzOWl4K1lvbTlyTTBPeFFPLy9LT2Jmc1dDODhWVDBCaElsN009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5SblkyRG5NUlBPd0loR0ZKTUVoaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI0MjU0NTYtZWQyNS00YWYxLWE2NTItOWU1MjVjYWJmMDczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MCxcbiAgICAgIDE0MyxcbiAgICAgIDE0NCxcbiAgICAgIDkwLFxuICAgICAgMjksXG4gICAgICAxNjAsXG4gICAgICAxNzMsXG4gICAgICAxMTIsXG4gICAgICA5MSxcbiAgICAgIDE5MixcbiAgICAgIDI1LFxuICAgICAgMjM4LFxuICAgICAgMTcsXG4gICAgICAyNDEsXG4gICAgICAxMjYsXG4gICAgICAxMjQsXG4gICAgICAyMzMsXG4gICAgICAxMjAsXG4gICAgICAyMjAsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM4LFxuICAgICAgMTcsXG4gICAgICAxMjcsXG4gICAgICAxOTcsXG4gICAgICA1NyxcbiAgICAgIDIwMixcbiAgICAgIDExNSxcbiAgICAgIDY3LFxuICAgICAgNzUsXG4gICAgICAxNDIsXG4gICAgICAxOTMsXG4gICAgICAyMjYsXG4gICAgICAyMTYsXG4gICAgICAxMjcsXG4gICAgICA0OSxcbiAgICAgIDEwNCxcbiAgICAgIDM3LFxuICAgICAgMTg4LFxuICAgICAgMTUxLFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFlGU0sxSDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM0xwczhGRUpxRnhyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9WaWNlNCt6YSt4WHdSSnpWc0crWnRLYVhVdnJvcjhtcDhVcG1ySDRxams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ2hmQXMxWW9qaFhQdEdrTE4zMDRFK3hSc2JPNi9VcWtrZXRpRXZvY1pLcTZCT1VXNnRhUjF2NnZXK3ZvL1dSTkdZcDlrSnZHRWc3U2xEVG93Q3hSQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSEVrVm8rTVVuQmpXU0p6NXI0RTFJeFg0LzhlUFAyaFEwSEkzbTlyZ3ltclVqbkxNM2FuYmltdzNKMTJWdlFvcGsvcjFScGJGTi9GWW91THZtTTFOamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcxNTAzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDZXLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "truey",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
