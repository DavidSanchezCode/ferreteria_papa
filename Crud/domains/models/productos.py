from operator import index
from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from Crud.drives.DBconnection import meta, engine

products_table = Table(
    "lista de productos", meta,
    Column("id", Integer, primary_key=True,index=True),
    Column("nombre_del_producto", String(255)),
    Column("precio_al_que_llega", Integer),
    Column("cantidad_del_producto_actual", Integer),
    Column("precio_por_unidad", Integer),
    Column("precio_por_mas_de_6_unds", Integer),
    Column("precio_por_mas_de_12_unds", Integer),
    Column("precio_con_rebaja", Integer)
)
meta.create_all(engine)
