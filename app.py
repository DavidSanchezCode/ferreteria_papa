from fastapi import FastAPI
from routes.variables.productos import src
import uvicorn

app = FastAPI(
    title="FERRETERIA LOS AMIGOS",
    subtitle="Base de datos etapa 1"
)
app.include_router(src)


@app.get("/")
async def main_route():
    return [{"name": "david"}]

if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=5000)
