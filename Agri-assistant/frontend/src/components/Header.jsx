import { NavLink } from 'react-router-dom'


export default function Header(){
return (
<header className="header container">
<div className="brand"><div className="logo"/><h1>Agri Assistant</h1></div>
<nav className="nav">
<NavLink to="/" end>Home</NavLink>
<NavLink to="/weather">Weather</NavLink>
<NavLink to="/market">Market</NavLink>
<NavLink to="/pest">Pest</NavLink>
<NavLink to="/schemes">Schemes</NavLink>
</nav>
</header>
)
}