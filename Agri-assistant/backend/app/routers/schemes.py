from fastapi import APIRouter
from ..utils.text import stamp


router = APIRouter(prefix="/api/schemes", tags=["schemes"])


@router.get("/links")
async def scheme_links(state: str = "Kerala"):
links = {
"pm_kisan_status": "https://pmkisan.gov.in/",
"kcc_info": "https://www.myscheme.gov.in/schemes/kcc",
"kerala_aims": "https://aims.kerala.gov.in/",
"kerala_kathir": "https://kathir.kerala.gov.in/",
}
return {"at": stamp(), "state": state, "links": links}