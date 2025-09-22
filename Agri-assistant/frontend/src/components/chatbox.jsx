import { useState } from 'react'


export default function ChatBox(){
const [text, setText] = useState('')
const [log, setLog] = useState([])
const [isRecording, setIsRecording] = useState(false)
const [audioSrc, setAudioSrc] = useState(null)


async function send(){
const res = await hello('കർഷകനേ')
setLog(l=>[{ role:'assistant', content: res.msg }, ...l])
}


async function onBlob(blob){
// Convert to wav/webm as-is and send to backend; backend handles base64
const file = new File([blob], 'voice.webm', { type: 'audio/webm' })
const res = await asr(file, 'ml')
setText(res.text || res.transcript || '[ASR failed]')
}


async function speak(){
const res = await tts(text, 'ml')
// Assume API returns { audio_b64: '...'} or { url: '...'}
if(res.audio_b64){
const b = atob(res.audio_b64)
const bytes = new Uint8Array(b.length)
for (let i=0;i<b.length;i++) bytes[i] = b.charCodeAt(i)
const url = URL.createObjectURL(new Blob([bytes.buffer], { type: 'audio/mp3' }))
setAudioSrc(url)
} else if (res.url) {
setAudioSrc(res.url)
}
}


return (
<div>
<div className="label">Malayalam</div>
<textarea className="input" rows={3} placeholder="ചോദ്യം ചോദിക്കൂ…" value={text} onChange={e=>setText(e.target.value)} />
<div className="row" style={{marginTop:8}}>
<button className="btn" onClick={send}>Send</button>
<button className="btn secondary" onClick={speak}>🔊 Speak</button>
<Recorder onBlob={onBlob} isRecording={isRecording} setIsRecording={setIsRecording} />
</div>
{audioSrc && <audio className="audio" controls src={audioSrc}></audio>}
<hr className="split"/>
<div>
{log.map((m,i)=> (
<div key={i} className="small" style={{marginBottom:8}}><b>{m.role}:</b> {m.content}</div>
))}
</div>
</div>
)
}