from fastapi import APIRouter
from ..utils.text import stamp


router = APIRouter(prefix="/api/advisory", tags=["advisory"])


@router.get("/hello")
async def hello(name: str = "കർഷകനേ"):
return {"msg": f"നമസ്കാരം {name}! എന്ത് സഹായം വേണം?", "at": stamp()}