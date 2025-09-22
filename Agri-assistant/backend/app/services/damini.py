from ..utils.http import get_json
from ..config import settings


async def lightning_alerts(lat: float, lon: float):
if not settings.DAMINI_BASE:
return {"note": "Damini not configured"}
try:
return await get_json(f"{settings.DAMINI_BASE}/alerts", params={"lat": lat, "lon": lon})
except Exception as e:
return {"error": str(e)}