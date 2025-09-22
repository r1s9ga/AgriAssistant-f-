from fastapi import APIRouter, Query
from ..services import imd
from ..utils.geo import imd_params
from ..utils.text import stamp


router = APIRouter(prefix="/api/weather", tags=["weather"])


@router.get("/nowcast")
async def get_nowcast(lat: float | None = None, lon: float | None = None, district: str | None = None):
params = imd_params(lat, lon, district)
data = await imd.nowcast(**params)
return {"at": stamp(), "params": params, "data": data}