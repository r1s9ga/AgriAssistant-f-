from ..utils.http import get_json
from ..config import settings


async def prices(commodity: str, state: str | None = None, district: str | None = None, market: str | None = None, date: str | None = None, limit: int = 20):
if not (settings.DATA_GOV_IN_KEY and settings.AGMARKNET_RESOURCE_ID):
return {"error": "DATA_GOV_IN_KEY/AGMARKNET_RESOURCE_ID not set"}
url = f"https://api.data.gov.in/resource/{settings.AGMARKNET_RESOURCE_ID}.json"
params = {"api-key": settings.DATA_GOV_IN_KEY, "format": "json", "limit": limit}
if commodity:
params["filters[commodity]"] = commodity.upper()
if state:
params["filters[state]"] = state.upper()
if district:
params["filters[district]"] = district.upper()
if market:
params["filters[market]"] = market.upper()
if date:
params["filters[date]"] = date
try:
return await get_json(url, params=params)
except Exception as e:
return {"error": str(e)}