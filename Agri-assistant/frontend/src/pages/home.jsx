import Card from '../components/Card'
import ChatBox from '../components/ChatBox'


export default function Home(){
return (
<div className="grid container">
<Card title="Ask in Malayalam" className="col-8">
<ChatBox/>
</Card>
<Card title="Tips" className="col-4">
<ul className="small">
<li>വോയ്സ് അയക്കാം — ‘ഇന്ന് മഴയുണ്ടോ?’</li>
<li>വില — ‘ടൊമാറ്റോ വില പാലക്കാട്’</li>
<li>കീടം — ‘വാഴ പ്യൂഡോസ്റ്റം വീവിൽ എന്ത്?’</li>
</ul>
</Card>
</div>
)
}