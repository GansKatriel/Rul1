let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/10536833dd37e45dd33b3.png'
       await conn.delay(1500)
       await conn.send2Button(id, text.trim(), wm, '𝙈𝙀𝙉𝙐🤖', '.menu', '𝙊𝙒𝙉𝙀𝙍🔱', '.owner', fake, { contextInfo: {
      externalAdReply :{
      showAdAttribution: true,
      }}})
     }
  m.reply('*Broadcast selesai*')
}
handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
