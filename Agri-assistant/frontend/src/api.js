const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'


export async function hello(name) {
const r = await fetch(`${BASE}/api/advisory/hello?name=${encodeURIComponent(name||'കർഷകനേ')}`)
return r.json()
}


export async function nowcast({lat, lon, district}) {
const q = new URLSearchParams()
if (lat) q.set('lat', lat)
if (lon) q.set('lon', lon)
if (district) q.set('district', district)
const r = await fetch(`${BASE}/api/weather/nowcast?${q.toString()}`)
return r.json()
}


export async function prices({commodity, state, district, market, date}) {
const q = new URLSearchParams({ commodity })
if (state) q.set('state', state)
if (district) q.set('district', district)
if (market) q.set('market', market)
if (date) q.set('date', date)
const r = await fetch(`${BASE}/api/market/prices?${q.toString()}`)
return r.json()
}


export async function pestAdvisory({crop, pest, state}) {
const q = new URLSearchParams({ crop })
if (pest) q.set('pest', pest)
if (state) q.set('state', state)
const r = await fetch(`${BASE}/api/pest/advisory?${q.toString()}`)
return r.json()
}


export async function schemeLinks(state='Kerala') {
const r = await fetch(`${BASE}/api/schemes/links?state=${encodeURIComponent(state)}`)
return r.json()
}


export async function asr(file, language='ml') {
const fd = new FormData()
fd.append('file', file)
fd.append('language', language)
const r = await fetch(`${BASE}/api/speech/asr`, { method: 'POST', body: fd })
return r.json()
}


export async function tts(text, language='ml') {
const fd = new FormData()
fd.append('text', text)
fd.append('language', language)
const r = await fetch(`${BASE}/api/speech/tts`, { method: 'POST', body: fd })
return r.json()
}