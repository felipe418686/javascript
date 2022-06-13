/*let ingreso = parseInt (prompt("ingrese un numero a multiplicar"));
let salida = parseInt (prompt("ingrese cuantas veces queres multiplicar"));
//ingreso un for para que el usario ingrese 2 numeros a multiplicar 
for (let i = 1; i <= salida; i= i + 1){
    let resultado = ingreso * i;
    //agrego un continue para saltar la linea 9 y seguir hasta la indicada, es un especie de break
    if (i==9) {
        continue
    }
    //coloco el console log para que el usario vea el resultado
    console.log(ingreso + " X " + i + " = " + resultado);
}
let entrada = prompt("ingresa la lista del super \n Para salir ingresa ESC");
while (entrada != "ESC") {
    console.log("la lista es: " + entrada );
    entrada = prompt("ingresa la lista del super \n Para salir ingresa ESC");
}*/

//Ejercicio 2
/*let precioProducto = parseFloat(prompt("ingrese el precio del producto"));
//Aqui el usuario va a poner el precio del producto a calcular incluyendo el iva

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
    
    alert("el precio del producto es: " + precioProducto.toFixed(2));
    console.log("el precio del producto es: " + precioProducto.toFixed(2));

    //Sumar el IVA al producto
    function sumarIva(precioProducto){
    return (precioProducto * 0.21)
    }

    let iva = sumarIva(precioProducto);

    alert("el IVA es: " + iva.toFixed(2));
    console.log("el IVA es: " + iva.toFixed(2));

    //Sumar el precio del producto con el iva
    function sumarPrecio(precioProducto, iva){
        return precioProducto+iva
    }
    let precioTotal = sumarPrecio(precioProducto, iva);
    alert("el precio total es: " + precioTotal.toFixed(2));
    console.log("el precio total es: " + precioTotal.toFixed(2));
*/
//Desafio complementario Arrays
//ejercicio 3

/*let listaCompra = ["dulce de leche", "azucar", "fruta", "pescado"]
let cantidades=[3,10,5,2]
let registroEntradas = [true,true,true,true,true,false,false,true,true]*/

//OBJETOS
let cliente = {
    nombre: "Juan",
    apellido: "Perez",
    direcion: "calle Avenida Honorio  1233",
    ciudad: "Cali",
    factura: 23000,
    facturasPendientes: true,
    empleados:["Roman", "Carlos","Julian"]
}
//ARREGLO DE OBJETOS
/*let arreglo = [{},{},{}]
const topTresJugadoresFutbol =[{
    ranking:1,
    nombre:"Messi",
    equipo:"Barcelona",
    pais:"Argentina"
},{
    ranking:2,
    nombre:"Neymar",
    equipo:"Paris Saint-Germain",
    pais:"Brasil"
},{
    ranking:3,
    nombre:"Cristiano Ronaldo",
    equipo:"Juventus",
    pais:"Portugal"
}]*/
console.log(cliente);
console.log(cliente.empleados[2]);
//ACCESOS
let messi ={
    nombre: "Messi",
    equipo: "Barcelona",
    pais: "Argentina",
    ranking: 1,
    edad: 30,
    goles: 100,
    activo: true,
    estaTemporadaResultado:{
        equiposDerrotados: ["PSG", "Real Madrid", "Manchester City"],
        finals:20,
        goles: 100
    },
    apodo: ["pulga"]
}
//cual fue el 2to equipo que derroto Messi
console.log(messi.estaTemporadaResultado.equiposDerrotados[1]);
