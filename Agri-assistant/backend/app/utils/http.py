import httpx


DEFAULT_TIMEOUT = httpx.Timeout(20.0, connect=10.0)


async def get_json(url: str, params: dict | None = None, headers: dict | None = None):
async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT, follow_redirects=True) as client:
r = await client.get(url, params=params, headers=headers)
r.raise_for_status()
return r.json()


async def post_json(url: str, json: dict, headers: dict | None = None):
async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT, follow_redirects=True) as client:
r = await client.post(url, json=json, headers=headers)
r.raise_for_status()
return r.json()