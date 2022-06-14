//carrito de compra
let carrito = [];
let producto = prompt("ingrese el producto a agregar al carrito");
while (producto != "") {
    carrito.push(producto);
    producto = prompt("ingrese el producto a agregar al carrito");
}
console.log("el carrito de compra es: " + carrito);
//ahora sumarle precio a los productos
let precioTotal = 0;
for (let i = 0; i < carrito.length; i++) {
    let precioProducto = parseFloat(prompt("ingrese el precio del producto"));
    while(true){
        if(!isNaN(precioProducto) && precioProducto != null && precioProducto != ""){
        break;
        }
        else{
            //esto se ejecuta si el usuario no ingresa un numero
            alert('no es numero');
            continue;
        }
    }
    precioTotal = precioTotal + precioProducto;
}
console.log("el precio total es: " + precioTotal.toFixed(2));
//ahora mostrar el carrito de compra
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}
//ahora mostrar el precio total
console.log("el precio total es: " + precioTotal.toFixed(2));
//ahora mostrar el precio total con el iva
let iva = precioTotal * 0.21;
console.log("el IVA es: " + iva.toFixed(2));
let precioTotalIva = precioTotal + iva;
console.log("el precio total con el iva es: " + precioTotalIva.toFixed(2));





