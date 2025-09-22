from fastapi import APIRouter
from ..services.pest_npss import advisory
from ..utils.text import stamp


router = APIRouter(prefix="/api/pest", tags=["pest"])


@router.get("/advisory")
async def pest_advisory(crop: str, pest: str | None = None, state: str | None = None):
data = await advisory(crop=crop, pest=pest, state=state)
return {"at": stamp(), "data": data}