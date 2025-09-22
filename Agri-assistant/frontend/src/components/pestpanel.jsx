import { useState } from 'react'
import Card from './Card'
import { pestAdvisory } from '../api'


export default function PestPanel(){
const [crop, setCrop] = useState('വാഴ')
const [pest, setPest] = useState('')
const [state, setState] = useState('Kerala')
const [res, setRes] = useState(null)


async function fetchPest(){
const data = await pestAdvisory({ crop, pest, state })
setRes(data)
}


return (
<Card title="Pest/IPM Advisory (Demo)">
<div className="grid">
<div className="col-4"><div className="label">Crop</div><input className="input" value={crop} onChange={e=>setCrop(e.target.value)} /></div>
<div className="col-4"><div className="label">Pest (optional)</div><input className="input" value={pest} onChange={e=>setPest(e.target.value)} /></div>
<div className="col-4"><div className="label">State</div><input className="input" value={state} onChange={e=>setState(e.target.value)} /></div>
</div>
<div className="row" style={{marginTop:10}}>
<button className="btn" onClick={fetchPest}>Fetch</button>
</div>
{res && (
<pre style={{whiteSpace:'pre-wrap', overflow:'auto'}}>{JSON.stringify(res,null,2)}</pre>
)}
</Card>
)}