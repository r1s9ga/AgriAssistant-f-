import { useEffect, useState } from 'react'
import Card from './Card'
import { schemeLinks } from '../api'


export default function SchemesPanel(){
const [links, setLinks] = useState(null)
useEffect(()=>{ schemeLinks().then(setLinks) },[])


return (
<Card title="Scheme Links">
{!links ? <div className="small">Loading…</div> : (
<ul>
<li><a href={links.links.pm_kisan_status} target="_blank">PM-KISAN</a></li>
<li><a href={links.links.kcc_info} target="_blank">Kisan Credit Card</a></li>
<li><a href={links.links.kerala_aims} target="_blank">Kerala AIMS</a></li>
<li><a href={links.links.kerala_kathir} target="_blank">Kerala KATHIR</a></li>
</ul>
)}
</Card>
)
}