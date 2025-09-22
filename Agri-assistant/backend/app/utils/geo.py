from typing import Optional


# Simple helper that prefers explicit coords; otherwise falls back to district map
KERALA_DISTRICTS = {
"thiruvananthapuram": 296,
"kollam": 297,
"pathanamthitta": 298,
"alappuzha": 299,
"kottayam": 300,
"idukki": 301,
"ernakulam": 302,
"thrissur": 303,
"palakkad": 304,
"malappuram": 305,
"kozhikode": 306,
"wayanad": 307,
"kannur": 308,
"kasaragod": 309,
}


def imd_params(lat: Optional[float], lon: Optional[float], district: Optional[str]):
if district and district.lower() in KERALA_DISTRICTS:
return {"district_id": KERALA_DISTRICTS[district.lower()]}
if lat and lon:
return {"lat": lat, "lon": lon}
return {"district_id": KERALA_DISTRICTS.get("palakkad")}