from fastapi import FastAPI
from routes.variables.productos import src

app = FastAPI(
    title="FERRETERIA LOS AMIGOS",
    subtitle="Base de datos etapa 1"
)
app.include_router(src)


@app.get("/")
async def main_route():
    return [{"name": "david"}]
