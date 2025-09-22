# Minimal placeholder that returns structured IPM guidance.
# In production: connect to NPSS/NCIPM APIs or crawl approved PDFs, index with RAG.


from ..services.rag_knowledge import retrieve


async def advisory(crop: str, pest: str | None = None, state: str | None = None):
content = retrieve(crop=crop, pest=pest, state=state)
if not content:
return {
"ipm": [
"നിരീക്ഷണം: ബാധിത ഇല/തണ്ട് പരിശോധിക്കുക; സാമ്പിൾ എണ്ണം രേഖപ്പെടുത്തുക.",
"കലചറൽ: ബാധിത അവശിഷ്ടങ്ങൾ നീക്കം ചെയ്യുക; ട്രാപ്പ് ക്രോപ്പുകൾ ഉപയോഗിക്കുക.",
"ബയോ: Beauveria bassiana പോലുള്ള ജൈവ ഉപാധികൾ.",
"കെയ്മിക്കൽ (അവസാന അഭയം): തദ്ദേശ അനുമതികൾ അനുസരിച്ച് മാത്രം; PPE നിർബന്ധം.",
],
"note": "Demo content; connect NPSS/KAU for authoritative text."
}
return content