import { useEffect, useRef, useState } from 'react'


export default function Recorder({ onBlob, isRecording, setIsRecording }){
const mediaRef = useRef(null)
const chunksRef = useRef([])
const [supported, setSupported] = useState(true)


useEffect(()=>{ setSupported(!!window.MediaRecorder) },[])


async function start(){
const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
const mr = new MediaRecorder(stream, { mimeType: 'audio/webm' })
mediaRef.current = mr
chunksRef.current = []
mr.ondataavailable = e => chunksRef.current.push(e.data)
mr.onstop = async () => {
const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
onBlob && onBlob(blob)
stream.getTracks().forEach(t=>t.stop())
}
mr.start()
setIsRecording(true)
}


function stop(){ mediaRef.current?.stop(); setIsRecording(false) }


if(!supported) return <div className="small">Recording not supported on this device.</div>


return (
<div className="row">
{!isRecording ? <button className="btn" onClick={start}>🎙️ Record</button>
: <button className="btn secondary" onClick={stop}>⏹ Stop</button>}
</div>
)
}