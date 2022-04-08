from domains.schemas.productos import products
from domains.service import productos


def get_products():
    return productos.get_products()


def getproduct(id: str):
    return productos.getproduct(id)


def createProduct(user: products):
    new_product = {
        "id": user.id,
        "nombre_del_producto": user.nombre_del_producto,
        "precio_al_que_llega": user.precio_al_que_llega,
        "cantidad_del_producto_actual": user.cantidad_del_producto_actual,
        "precio_por_unidad": user.precio_por_unidad,
        "precio_por_mas_de_6_unds": user.precio_por_mas_de_6_unds,
        "precio_por_mas_de_12_unds": user.precio_por_mas_de_12_unds,
        "precio_con_rebaja": user.precio_con_rebaja
    }
    productos.createProduct(new_product)


def updateProduct(id: str, user: products):
    new_product = {
        "precio_al_que_llega": user.precio_al_que_llega,
        "cantidad_del_producto_actual": user.cantidad_del_producto_actual,
        "precio_por_unidad": user.precio_por_unidad,
        "precio_por_mas_de_6_unds": user.precio_por_mas_de_6_unds,
        "precio_por_mas_de_12_unds": user.precio_por_mas_de_12_unds,
        "precio_con_rebaja": user.precio_con_rebaja
    }
    productos.updateProduct(new_product)
    return productos.updateProduct(id),"se actualizo correctamente"


def deleteProduct(id: str):
    productos.deleteProduct(id)
    return "se borro correctamente"
