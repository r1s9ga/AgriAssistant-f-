import base64
from ..utils.http import post_json
from ..config import settings


async def asr_wav_b64(b64_wav: str, language_code: str = "ml"): # Malayalam default
if not (settings.BHASHINI_BASE_URL and settings.BHASHINI_ASR_MODEL_ID and settings.BHASHINI_API_KEY):
return {"error": "Bhashini ASR not configured"}
payload = {
"modelId": settings.BHASHINI_ASR_MODEL_ID,
"language": language_code,
"audio": b64_wav,
}
headers = {"Authorization": f"Bearer {settings.BHASHINI_API_KEY}"}
try:
return await post_json(f"{settings.BHASHINI_BASE_URL}/asr", json=payload, headers=headers)
except Exception as e:
return {"error": str(e)}


async def tts(text: str, language_code: str = "ml"):
if not (settings.BHASHINI_BASE_URL and settings.BHASHINI_TTS_MODEL_ID and settings.BHASHINI_API_KEY):
return {"error": "Bhashini TTS not configured"}
payload = {"modelId": settings.BHASHINI_TTS_MODEL_ID, "language": language_code, "text": text}
headers = {"Authorization": f"Bearer {settings.BHASHINI_API_KEY}"}
try:
return await post_json(f"{settings.BHASHINI_BASE_URL}/tts", json=payload, headers=headers)
except Exception as e:
return {"error": str(e)}