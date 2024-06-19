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

"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SUHAIL_09_39_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDcsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDkyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrdjJ0ZEhhN3cxVjFTLzVjY1VzZ2pzMXQ1SlFhWkZsQVNZRDF2cTV4MTNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkYmxyTnlOYVRiZTZfR2RadFBJRjBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZlYjY4ODQ4LWFjMDgtNDAwZi05ZmMzLTZlYzAyM2FiNmMzM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyMzUsXG4gICAgICAyNDAsXG4gICAgICAyMTAsXG4gICAgICA0MSxcbiAgICAgIDE2MCxcbiAgICAgIDE3NixcbiAgICAgIDgsXG4gICAgICAxNSxcbiAgICAgIDc2LFxuICAgICAgMjIsXG4gICAgICAxMTUsXG4gICAgICAxNzAsXG4gICAgICAyNCxcbiAgICAgIDE2MyxcbiAgICAgIDk0LFxuICAgICAgMTkzLFxuICAgICAgMTYsXG4gICAgICAxOTIsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICA0NixcbiAgICAgIDIzLFxuICAgICAgMTkzLFxuICAgICAgMjYsXG4gICAgICA4LFxuICAgICAgMjEsXG4gICAgICAyOSxcbiAgICAgIDI0MSxcbiAgICAgIDE5MixcbiAgICAgIDI0NyxcbiAgICAgIDIyLFxuICAgICAgMTQ4LFxuICAgICAgMTI1LFxuICAgICAgMjM5LFxuICAgICAgMTkyLFxuICAgICAgMjAxLFxuICAgICAgMTgwLFxuICAgICAgMTgwLFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkMyN1dGUFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODc2Mjc5Mzc6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3NoX0dyYXBoaWNzZGVzaWduLkZyYW1lcyBMdGRcIixcbiAgICBcImxpZFwiOiBcIjE3OTg3MzIzMDM3NzE3OToyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYk1wczhGRUwzT3lyTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9WaWNlNCt6YSt4WHdSSnpWc0crWnRLYVhVdnJvcjhtcDhVcG1ySDRxams9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTViMlZEL1M0cnNGcFUySS9NWHo0SUlwTm5TbFdHK1lyaGI4ekZUd3VoMXR0REhRWXk1QW11ZjlKZjd6SlpXR3hvcytiZzlDd20zc1B2dkZ3WUtVQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1JkVTdsdjJrSzZDS2hEYXR1VzQ5OC91UWdqZUFpMHRqRTFmeUIva1QrL1l3LzQ5ZDFnTTFSUWxYTHZXSU52djJLQ3doSHhQWTdyelUyVnQ0blA5Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NzYyNzkzNzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODc4OTk1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA2V1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDZXLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUdQZGZ3YTQrRS9menlIcktiK0pTSE5jcHFoRno0bDF2TXV3SHcrNkZGST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA4NDg0NjAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NzEwODM4MzEwXCJ9Igp9"


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
