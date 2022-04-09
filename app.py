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

log_config = uvicorn.config.LOGGING_CONFIG
log_config["formatters"]["access"]["fmt"] = "%(asctime)s - %(levelname)s - %(message)s"

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=5000, log_config=log_config)
