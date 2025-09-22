# Extremely simple file-based retriever; replace with vector DB in production.
import json, os


DOC = {
("ചെമ്പരത്തി", None): {
"ipm": ["പുഴുക്കളുടെ എണ്ണിശം നിരീക്ഷിക്കുക", "ചൊറിയൽ കാണുമ്പോൾ സ്റ്റിക്കി ട്രാപ്പുകൾ"],
"chem": ["സ്പീനോസാഡ് 45 SC: 0.3 ml/L", "ഇമിഡാക്ലോപ്രിഡ് 17.8 SL: 0.3 ml/L"],
"safety": ["PPE: ഗ്ലൗസ്/മാസ്ക്/ഗോഗിൾസ്", "വർഷം/കാറ്റ് ശക്തമാകുമ്പോൾ തളിക്കരുത്"],
}
}


def retrieve(crop: str, pest: str | None, state: str | None):
return DOC.get((crop, pest))