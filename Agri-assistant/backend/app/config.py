dantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
# General
APP_NAME: str = "Agri Assistant"
BACKEND_CORS_ORIGINS: str = "*"


# Data.gov.in (AGMARKNET)
DATA_GOV_IN_KEY: str | None = None
AGMARKNET_RESOURCE_ID: str | None = None # e.g., high-value dataset resource id


# Bhashini
BHASHINI_BASE_URL: str | None = None
BHASHINI_ASR_MODEL_ID: str | None = None
BHASHINI_TTS_MODEL_ID: str | None = None
BHASHINI_API_KEY: str | None = None


# IMD / MAUSAM
IMD_BASE_URL: str = "https://mausam.imd.gov.in/api"
PUBLIC_IP: str | None = None # If IMD needs whitelisting


# Meghdoot
MEGHDOOT_BASE: str | None = None # if they provide a public JSON; else scrape-friendly endpoint disabled


# Damini lightning
DAMINI_BASE: str | None = None


# NPSS / NCIPM (docs & advisories)
NPSS_BASE: str | None = None


# RAG store (for KAU/NPSS PDFs) — placeholder
RAG_DIR: str = "./rag_docs"


class Config:
env_file = ".env"


settings = Settings()