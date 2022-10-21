async function cargarinvetarioGET(url) {
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

}

const btnabrirModal =
document.querySelector("#btnabrirModal");
const btncerrarModal=
document.querySelector("#btncerrarModal");
const modal=
document.querySelector("#modal");

btnabrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btncerrarModal.addEventListener("click",()=>{
    modal.close();
})




/*function eliminarproducto(btn) {
    let fila = btn.parentNode.parentNode;
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