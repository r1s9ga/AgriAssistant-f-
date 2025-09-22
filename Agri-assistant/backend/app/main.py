from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import settings
from .routers import weather, market, asr_tts, pest, schemes, advisory


app = FastAPI(title=settings.APP_NAME)


app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)


app.include_router(advisory.router)
app.include_router(weather.router)
app.include_router(market.router)
app.include_router(asr_tts.router)
app.include_router(pest.router)
app.include_router(schemes.router)


@app.get("/")
async def root():
return {"ok": True, "app": settings.APP_NAME}