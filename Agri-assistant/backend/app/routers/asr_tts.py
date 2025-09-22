import base64
from fastapi import APIRouter, UploadFile, File, Form
from ..services.bhashini import asr_wav_b64, tts


router = APIRouter(prefix="/api/speech", tags=["speech"])


@router.post("/asr")
async def do_asr(file: UploadFile = File(...), language: str = Form("ml")):
b = base64.b64encode(await file.read()).decode()
res = await asr_wav_b64(b, language)
return res


@router.post("/tts")
async def do_tts(text: str = Form(...), language: str = Form("ml")):
res = await tts(text, language)
# Expecting API to return base64 audio or URL; we pass through
return res