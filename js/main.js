const DOMProductos = document.getElementById('productos')
const DOMCarrito = document.getElementById('carrito')
const traerDatos = async() => {
    let respuesta = await fetch('./js/datos.json')
    return respuesta.json()
}
window.addEventListener('DOMContentLoaded' , () => {
    renderizarDOM()
})
let carrito = []
const renderizarDOM = async() => {
    let productos = await traerDatos()
    let productosPanelVista = ''
    productos.forEach(producto => {
        const{Foto, Nombre, Precio, Id} = producto
        {
            productosPanelVista +=
            `
            <div class="col-12 mb-2 col-md-3 col-sm-4 ">
                <div class="card">
                    <div class="card-body">
                    <img id="fotoProducto" src="${Foto}" class="card-img-top">
                    <h5 id="tituloProducto">${Nombre}</h5>
                    <p id="precioProducto">$${Precio}</p>
                    <button data-id="${Id}" id="mybtn" name="btnComprar" class="btn btn-success">Comprar</button>
                    </div>
                </div>
            </div>
            `
        }
    });
    DOMProductos.innerHTML = productosPanelVista
}
DOMProductos.addEventListener('click' , (e) => {
    if(e.target.id === "mybtn"){
        Toastify({
            text: "Usted compro un producto",
            
            duration: 3000
            
            }).showToast();
        guardarProductos(e.target.dataset.id)
    }
})

const guardarProductos = async(id) => {
    let productos = await traerDatos()
    let productoEncontrado = productos.find(producto => producto.Id === parseInt(id))
    let productoStorage = JSON.parse(localStorage.getItem(id))
    if(productoStorage === null){
        localStorage.setItem(id, JSON.stringify({...productoEncontrado, Cantidad: 1}))
    }else{
        let productoExiste = JSON.parse(localStorage.getItem(id))
        productoExiste.Cantidad = productoExiste.Cantidad + 1
        productoExiste.Precio = productoExiste.Precio + productoEncontrado.Precio
        console.log(productoExiste)
        localStorage.setItem(id, JSON.stringify(productoExiste))
    }
}
const recorrerStorage = () => {
    carrito.length = 0
    for (let index = 0; index < localStorage.length; index++) {
        const element = localStorage.key(index)
        carrito.push(JSON.parse(localStorage.getItem(element)))
    }
    renderCarrito()
}
const renderCarrito = () => {
    if (carrito.length > 0) {
        DOMCarrito=''
        carrito.forEach(producto => {
            const { Foto, Nombre, Precio, Cantidad, Id } = producto
            DOMCarrito.innerHTML += `<div class="col-12 mb-2 col-md-4 col-sm-4">
            <div id='card' class="card">
                <div class="card-body">
                <img id="fotoProducto" src"${Foto}" class="card-img-top">
                <h5 id="tituloProducto">Nombre: ${Nombre}</h5>
                <p id="precioProducto">Precio: $${Precio}</p>
                <p id="precioProducto">Cantidad: ${Cantidad}</p>
                <button data-id="${Id}" id="mybtnclear" name="btnBorrar" class="btn btn-danger">Borrar</button>
                </div>
            </div>
        </div>
        `
        });
    }
}






