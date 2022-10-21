from fastapi import APIRouter
from Crud.usesCase.productos import createProduct, updateProduct, getproduct, get_products, deleteProduct
from Crud.domains.schemas.productos import productsSalida

src = APIRouter()

# busca todos los productos
@src.get("/productos")
def ver_productos():
    producto = get_products()
    return producto


# busca un producto en especifico
@src.get("/productos/{id}")
def ver_producto(id: str):
    producto =  getproduct(id)
    return producto

# registra los productos
@src.post("/productos")
async def introducir_Products(user: productsSalida):
    infoUser = createProduct(user)
    return infoUser

# actualiza los productos
@src.put("/productos/{id}")
async def actualizar_producto(producto:productsSalida, id: str):
    actualizar = updateProduct(producto,id )
    return actualizar

# borrar producto
@src.delete("/productos/{id}")
async def borrar_producto(id: str):
    borrar = deleteProduct(id)
    return borrar
