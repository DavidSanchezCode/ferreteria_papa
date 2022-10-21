from multiprocessing import allow_connection_pickling
from fastapi import FastAPI
from starlette.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from Crud.routes.variables.productos import src

import uvicorn

app = FastAPI(
    title="FERRETERIA LOS AMIGOS",
    subtitle="Base de datos etapa 3"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

app.include_router(src)


@app.get("/")
async def main_route():
    return RedirectResponse(url="/docs")

if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=5000)
