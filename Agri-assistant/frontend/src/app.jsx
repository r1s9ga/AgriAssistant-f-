import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Market from './pages/Market'
import Pest from './pages/Pest'
import Schemes from './pages/Schemes'
import './styles.css'


export default function App(){
return (
<BrowserRouter>
<Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/weather" element={<Weather/>} />
<Route path="/market" element={<Market/>} />
<Route path="/pest" element={<Pest/>} />
<Route path="/schemes" element={<Schemes/>} />
</Routes>
<Footer/>
</BrowserRouter>
)
}