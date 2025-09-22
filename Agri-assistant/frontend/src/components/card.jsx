export default function Card({title, actions, children, className=''}){
return (
<section className={`card ${className}`}>
<div className="row" style={{justifyContent:'space-between', alignItems:'center'}}>
<h3 style={{margin:0}}>{title}</h3>
{actions}
</div>
<hr className="split"/>
<div>{children}</div>
</section>
)
}