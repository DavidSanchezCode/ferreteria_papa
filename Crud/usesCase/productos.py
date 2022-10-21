from Crud.domains.schemas.productos import productsSalida
from Crud.domains.service import productos


def get_products():
    return productos.get_products()


def getproduct(id: str):
    return productos.getproduct(id)


def createProduct(user: productsSalida):
    new_product = {
        "nombre_del_producto": user.nombre_del_producto,
        "precio_al_que_llega": user.precio_al_que_llega,
        "cantidad_del_producto_actual": user.cantidad_del_producto_actual,
        "precio_por_unidad": user.precio_por_unidad,
        "precio_por_mas_de_6_unds": user.precio_por_mas_de_6_unds,
        "precio_por_mas_de_12_unds": user.precio_por_mas_de_12_unds,
        "precio_con_rebaja": user.precio_con_rebaja
    }
    productos.createProduct(new_product)


def updateProduct(producto: productsSalida, id: str):
    actulizar_product = {
        "nombre_del_producto": producto.nombre_del_producto,
        "precio_al_que_llega": producto.precio_al_que_llega,
        "cantidad_del_producto_actual": producto.cantidad_del_producto_actual,
        "precio_por_unidad": producto.precio_por_unidad,
        "precio_por_mas_de_6_unds": producto.precio_por_mas_de_6_unds,
        "precio_por_mas_de_12_unds": producto.precio_por_mas_de_12_unds,
        "precio_con_rebaja": producto.precio_con_rebaja
    }
    productos.updateProduct(actulizar_product,id)
    return "se actualizo correctamente"


def deleteProduct(id: str):
    productos.deleteProduct(id)
    return "se borro correctamente"
