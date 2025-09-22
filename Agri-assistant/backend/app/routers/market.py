from fastapi import APIRouter
from ..services.agmarknet import prices
from ..utils.text import stamp


router = APIRouter(prefix="/api/market", tags=["market"])


@router.get("/prices")
async def get_prices(commodity: str, state: str | None = None, district: str | None = None, market: str | None = None, date: str | None = None):
data = await prices(commodity, state, district, market, date)
return {"at": stamp(), "data": data}