from Crud.drives.DBconnection import conn
from Crud.domains.models.productos import products_table
from Crud.domains.schemas.productos import productsSalida


def getproduct(id: str):
    return conn.execute(products_table.select().where(products_table.c.id == id)).first()


def get_products():
    return conn.execute(products_table.select()).fetchall()


def createProduct(produc: productsSalida):
    return conn.execute(products_table.insert().values(produc))


def updateProduct(product: productsSalida, id: str):
     return  conn.execute(products_table.update().values(product).where(products_table.c.id == id))

 


def deleteProduct(id: str):
    return conn.execute(products_table.delete().where(products_table.c.id == id))
