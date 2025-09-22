import { useState } from 'react'
import Card from './Card'
import { prices } from '../api'


export default function MarketPanel(){
const [commodity, setCommodity] = useState('TOMATO')
const [state, setState] = useState('KERALA')
const [district, setDistrict] = useState('PALAKKAD')
const [market, setMarket] = useState('')
const [date, setDate] = useState('')
const [res, setRes] = useState(null)


async function fetchPrices(){
const data = await prices({ commodity, state, district, market, date })
setRes(data)
}


return (
<Card title="AGMARKNET Prices">
<div className="grid">
<div className="col-4"><div className="label">Commodity</div><input className="input" value={commodity} onChange={e=>setCommodity(e.target.value)} /></div>
<div className="col-4"><div className="label">State</div><input className="input" value={state} onChange={e=>setState(e.target.value)} /></div>
<div className="col-4"><div className="label">District</div><input className="input" value={district} onChange={e=>setDistrict(e.target.value)} /></div>
<div className="col-6"><div className="label">Market (optional)</div><input className="input" value={market} onChange={e=>setMarket(e.target.value)} /></div>
<div className="col-6"><div className="label">Date (YYYY-MM-DD)</div><input className="input" value={date} onChange={e=>setDate(e.target.value)} /></div>
</div>
<div className="row" style={{marginTop:10}}>
<button className="btn" onClick={fetchPrices}>Fetch</button>
</div>
{res && (
<pre style={{whiteSpace:'pre-wrap', overflow:'auto'}}>{JSON.stringify(res,null,2)}</pre>
)}
</Card>
)
}