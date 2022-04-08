from fastapi import APIRouter
from usesCase.productos import createProduct, updateProduct, getproduct, get_products, deleteProduct
from domains.models.productos import products_table
from domains.schemas.productos import products

src = APIRouter()

# busca todos los productos


@src.get("/productos")
def ver_productos():
    producto = get_products()
    return producto


# busca un producto en especifico
@src.get("/producto/{id}")
def ver_producto(id: str):
    producto = getproduct(id)
    return producto

# registra los productos


@src.post("/Registro_de_productos/")
async def introducir_Products(user: products):
    infoUser = createProduct(user)
    return infoUser

# actualiza los productos


@src.put("/actualizar_producto/{id}")
async def actualizar_producto(id: str):
    actualizar = updateProduct(id)
    return actualizar

# borrar producto


@src.delete("/borrar_producto/{id}")
async def borrar_producto(id: str):
    borrar = deleteProduct(id)
    return borrar
