import { useState } from 'react'
import Card from './Card'
import { nowcast } from '../api'


export default function WeatherPanel(){
const [district, setDistrict] = useState('Palakkad')
const [lat, setLat] = useState('')
const [lon, setLon] = useState('')
const [res, setRes] = useState(null)


async function fetchNow(){
const data = await nowcast({ lat: lat||undefined, lon: lon||undefined, district: district||undefined })
setRes(data)
}


return (
<Card title="IMD Nowcast (Kerala‑first)">
<div className="grid">
<div className="col-6">
<div className="label">District</div>
<input className="input" value={district} onChange={e=>setDistrict(e.target.value)} placeholder="Palakkad"/>
</div>
<div className="col-3">
<div className="label">Lat</div>
<input className="input" value={lat} onChange={e=>setLat(e.target.value)} placeholder=""/>
</div>
<div className="col-3">
<div className="label">Lon</div>
<input className="input" value={lon} onChange={e=>setLon(e.target.value)} placeholder=""/>
</div>
</div>
<div className="row" style={{marginTop:10}}>
<button className="btn" onClick={fetchNow}>Fetch</button>
</div>
{res && (
<pre style={{whiteSpace:'pre-wrap', overflow:'auto'}}>{JSON.stringify(res,null,2)}</pre>
)}
</Card>
)
}