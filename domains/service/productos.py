from drives.DBconnection import conn
from domains.models.productos import products_table
from domains.schemas.productos import products


def getproduct(id: str):
    return conn.execute(products_table.select().where(products_table.c.id == id)).first()


def get_products():
    return conn.execute(products_table.select()).fetchall()


def createProduct(produc: products):
    return conn.execute(products_table.insert().values(produc))


def updateProduct(user: products, id: str):
    conn.execute(products_table.update().values(
        precio_al_que_llega=user.precio_al_que_llega,
        cantidad_del_producto_actual=user.cantidad_del_producto_actual,
        precio_por_unidad=user.precio_por_unidad,
        precio_por_mas_de_6_unds=user.precio_por_mas_de_6_unds,
        precio_por_mas_de_12_unds=user.precio_por_mas_de_12_unds,
        precio_con_rebaja=user.precio_con_rebaja).where(user.c.id == id))

    return conn.execute(products_table.update().values(user).where(products_table.c.id == id)).first()


def deleteProduct(id: str):
    return conn.execute(products_table.delete().where(products_table.c.id == id))


