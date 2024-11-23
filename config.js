const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_21_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgOTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlQ1cUxrMThneHBpM2dFV1pxUitXYkMva3MzdnhNUUxma3BZclpaQUR3NzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI3MjkzNjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MEEzODU3QUI4NjRGMjcwQkM2RkUzOTY4N0Q3RDhFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzOTY4OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjcyOTM2NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA1NDM5MUJBOEU3RjQwRUIyNzMyMzlGMjdDODUwRTQ1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjM5Njg5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNNU9WRE50N1JheURvbjMxOWs5RkVRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1ZGFmNDhhLWIyNzctNDg4Yi1hYzA1LTAwOTRhZWE5ZDdkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDE5LFxuICAgICAgOTAsXG4gICAgICA1OSxcbiAgICAgIDE2MCxcbiAgICAgIDE1MSxcbiAgICAgIDE3MixcbiAgICAgIDE2NSxcbiAgICAgIDEwMCxcbiAgICAgIDE1MCxcbiAgICAgIDUyLFxuICAgICAgMjM2LFxuICAgICAgMTc4LFxuICAgICAgMjQ1LFxuICAgICAgNTMsXG4gICAgICAxNDEsXG4gICAgICAxODMsXG4gICAgICAyNTMsXG4gICAgICA0LFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTEsXG4gICAgICAxOSxcbiAgICAgIDU4LFxuICAgICAgMjA4LFxuICAgICAgMjUyLFxuICAgICAgMTQwLFxuICAgICAgMCxcbiAgICAgIDE2OSxcbiAgICAgIDE5MCxcbiAgICAgIDU5LFxuICAgICAgMTM4LFxuICAgICAgMjM0LFxuICAgICAgMTEwLFxuICAgICAgMTE1LFxuICAgICAgMjExLFxuICAgICAgMTE2LFxuICAgICAgNzgsXG4gICAgICA5NixcbiAgICAgIDEyNixcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQ1RTlNQ1FIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjcyOTM2NTI6NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg5NTU0OTMzODgzODE6NTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi66ek66ClIOuEmOy5mOuKlCDsmZXsnpDri5jwn6WwXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEQ3MGN3RUVOaU9pYm9HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjdmY2RWNoNGkrSlF3Z0tWeGNhaENmUVFhOUlJZ2JEOTNSKzVBbk5KM1ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJ2TDMyZmJvSFltYVNlWFErMDZpd3ZHL1Y3eW9Ka3RacGg5RldhTlo2ODdZWU5QQmlqd3BZYnhrVlRqeFlRc2I4WjlUR0FtWUE4UkRKTi8rcENlL0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxpNjVUaS9od3dwVnlZWlhtQjUzNElPN1RLR1FJeEpiL0l0REFwSU5DUXlEbzJoek5QcFhoaE5xQXBMVzY1REovYjFlTjgzSWppZTVVelludHAwampBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNzI5MzY1Mjo1N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIzOTY4OTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGaW9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZpby5qc29uIjogIntcImtleURhdGFcIjpcIm42dXYvelp1eVpGYWFHUzc1VGxnZm1XbWYyVmhoMzkxYnN0a29RaURLL0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzNDQ2ODI3MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMjM4NTg1NjYxOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
