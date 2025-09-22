from . import imd
from ..utils.http import get_json
from ..config import settings


async def nowcast(lat: float | None = None, lon: float | None = None, district_id: int | None = None):
url = f"{settings.IMD_BASE_URL}/nowcastapi.php"
params = {}
if district_id:
params["id"] = district_id
elif lat and lon:
params.update({"lat": lat, "lon": lon})
headers = {"X-Forwarded-For": settings.PUBLIC_IP} if settings.PUBLIC_IP else None
try:
return await get_json(url, params=params, headers=headers)
except Exception as e:
return {"error": str(e), "note": "IMD API unreachable or IP not whitelisted"}