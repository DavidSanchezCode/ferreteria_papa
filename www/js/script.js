async function cargarinvetarioGET(url) {

    console.log("hola mundo");

    let products = fetch(url)
        .then(res => res.json())
        .then((src) => {
            return src;
        });
    return products;
}

async function crearInventario() {
    let productoscargar = await cargarinvetarioGET('http://127.0.0.1:8000/productos')
    let tabla = document.getElementById('tbody');
    for (let k in productoscargar) {
        let productos = productoscargar[k];
        tr = document.createElement('tr');
        for (let x in productos) {
            td = document.createElement('td');
            td.innerHTML = productos[x];
            tr.appendChild(td);
        }
        tdOpc = document.createElement('td');
        tabla.appendChild(tr)
    }

}/*
const #id =
document.querySelector("##id");


/*dialog de añadir*/
const btnabrirModal =
    document.querySelector("#btnabrirModal");
const btncerrarModal =
    document.querySelector("#btncerrarModal");
const modal =
    document.querySelector("#modal");

btnabrirModal.addEventListener("click", () => {
    modal.showModal();
})

btncerrarModal.addEventListener("click", () => {
    modal.close();
})
/*dialog de actualizar*/
const btnabrirModal_ACT =
    document.querySelector("#btnabrirModal_ACT");
const btncerrarModal_ACT =
    document.querySelector("#btncerrarModal_ACT");
const modal1 =
    document.querySelector("#modal1");

btnabrirModal_ACT.addEventListener("click", () => {
    modal1.showModal();
})

btncerrarModal_ACT.addEventListener("click", () => {
    modal1.close();
})


/*dialog de buscar*/
const btnabrirModal_BUSC =
    document.querySelector("#btnabrirModal_BUSC");
const btncerrar_BUSC =
    document.querySelector("#btncerrarModal_BUSC");
const modal2 =
    document.querySelector("#modal2");

btnabrirModal_BUSC.addEventListener("click", () => {
    modal2.showModal();
})

btncerrarModal_BUSC.addEventListener("click", () => {
    modal2.close();
})

/*dialog de eliminar*/
const btnabrirModal_ELIM =
    document.querySelector("#btnabrirModal_ELIM");
const btncerrarModal_ELIM =
    document.querySelector("#btncerrarModal_ELIM");
const modal3 =
    document.querySelector("#modal3");

const btn_eliminar =
    document.querySelector("#btn_eliminar");

btnabrirModal_ELIM.addEventListener("click", () => {
    modal3.showModal();
})

btncerrarModal_ELIM.addEventListener("click", () => {
    modal3.close();
})


async function crearProductoPOST() {

    let nombre = document.getElementById("nombre_del_producto").value;
    let precio_al_que_llega = document.getElementById("precio_al_que_llega").value;
    let cantidad_del_producto_actual = document.getElementById("cantidad_del_producto_actual").value;
    let precio_por_unidad = document.getElementById("precio_por_unidad").value;
    let precio_por_mas_de_6_unds = document.getElementById("precio_por_mas_de_6_unds").value;
    let precio_por_mas_de_12_unds = document.getElementById("precio_por_mas_de_12_unds").value;
    let precio_con_rebaja = document.getElementById("precio_con_rebaja").value;

    productocargar = {}
    productocargar.nombre_del_producto = nombre;
    productocargar.precio_al_que_llega = precio_al_que_llega;
    productocargar.cantidad_del_producto_actual = cantidad_del_producto_actual;
    productocargar.precio_por_unidad = precio_por_unidad;
    productocargar.precio_por_mas_de_6_unds = precio_por_mas_de_6_unds;
    productocargar.precio_por_mas_de_12_unds = precio_por_mas_de_12_unds;
    productocargar.precio_con_rebaja = precio_con_rebaja;

    let url = 'http://127.0.0.1:8000/productos';

    console.log(productocargar);

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(productocargar),
        headers: {
            'Content-type': 'application/json'
        }

    }).then(res => res.json())
        .catch(error => console.error('error:', error))
        .then(response => console.log('exito:', response))
}

async function actualizarProductoPOST() {

    let id = document.getElementById("num_id").value;

    let nombre = null
    if (document.getElementById("nombre_del_productoA").value != "") {
        nombre = document.getElementById("nombre_del_productoA").value
    };

    let precio_al_que_llega = null
    if (document.getElementById("precio_al_que_llegaA").value != "") {
        precio_al_que_llega = document.getElementById("precio_al_que_llegaA").value
    };

    let cantidad_del_producto_actual = null
    if (document.getElementById("cantidad_del_producto_actualA").value != "") {
        cantidad_del_producto_actual = document.getElementById("cantidad_del_producto_actualA").value
    };

    let precio_por_unidad = null
    if (document.getElementById("precio_por_unidadA").value != "") {
        precio_por_unidad = document.getElementById("precio_por_unidadA").value
    };

    let precio_por_mas_de_6_unds = null
    if (document.getElementById("precio_por_mas_de_6_undsA").value != "") {
        precio_por_mas_de_6_unds = document.getElementById("precio_por_mas_de_6_undsA").value
    };

    let precio_por_mas_de_12_unds = null
    if (document.getElementById("precio_por_mas_de_12_undsA").value != "") {
        precio_por_mas_de_12_unds = document.getElementById("precio_por_mas_de_12_undsA").value
    };

    let precio_con_rebaja = null
    if (document.getElementById("precio_con_rebajaA").value != "") {
        precio_con_rebaja = document.getElementById("precio_con_rebajaA").value
    };

    productocargar = {}
    productocargar.nombre_del_producto = nombre;
    productocargar.precio_al_que_llega = precio_al_que_llega;
    productocargar.cantidad_del_producto_actual = cantidad_del_producto_actual;
    productocargar.precio_por_unidad = precio_por_unidad;
    productocargar.precio_por_mas_de_6_unds = precio_por_mas_de_6_unds;
    productocargar.precio_por_mas_de_12_unds = precio_por_mas_de_12_unds;
    productocargar.precio_con_rebaja = precio_con_rebaja;

    let url = 'http://127.0.0.1:8000/productos/' + id;

    console.log(productocargar);

    await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(productocargar),
        headers: {
            'Content-type': 'application/json'
        }

    }).then(res => res.json())
        .catch(error => console.error('error:', error))
        .then(response => console.log('exito:', response))
}

let encontrado = {}

async function buscarProductoPOST() {

    let id = document.getElementById("num_idB").value;

    let url = 'http://127.0.0.1:8000/productos/' + id;
    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }

    }).then(res => res.json())/* {
        encontrado= res.data    
        console.log(res.data)
    })*/
        .catch(error => console.error('error:', error))
        .then(response => console.log('exito:', response))
}

async function BorrarProductoPOST() {

    let id = document.getElementById("num_idC").value;

    let url = 'http://127.0.0.1:8000/productos/' + id;
    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }

    }).then(res => res.json())
        .catch(error => console.error('error:', error))
        .then(response => console.log('exito:', response))
}
/* volver excel*/

const $btnExportar = document.querySelector("#btnExportar"),
    $tablaExcel = document.querySelector("#tablaExcel");

$btnExportar.addEventListener("click", function () {
    let tableExport = new TableExport($tablaExcel, {
        exportButtons: false, // No queremos botones
        filename: "Mi tabla de Excel", //Nombre del archivo de Excel
        sheetname: "Mi tabla de Excel", //Título de la hoja
    });
    let datos = tableExport.getExportData();
    let preferenciasDocumento = datos.tablaExcel.xlsx;
    tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
});








/*function eliminarproducto(btn_eliminar) {
    let fila = btn_eliminar.parentNode.parentNode;
    let id = fila.firtsElementChild.innerHTML;
    let url = 'http://127.0.0.1:8000/productos';
    alertify.confirm("se ah eliminado el producto" + id + "",
    function () {
            fetch(url + id, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .catch(err => console.error('error:', error))
                .then(response => console.log('exito:', response))
                .then(() => location.reload())
            alertify.success('Borrado');
        },
        function() {
            alertify.error('cancelado')
        })
}*/