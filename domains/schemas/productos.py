from pydantic import BaseModel


class products(BaseModel):
    id: str
    nombre_del_producto: str
    precio_al_que_llega: int
    cantidad_del_producto_actual: int
    precio_por_unidad: int
    precio_por_mas_de_6_unds: int
    precio_por_mas_de_12_unds: int
    precio_con_rebaja: int
