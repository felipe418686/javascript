let ingreso = parseInt (prompt("ingrese un numero a multiplicar"));
let salida = parseInt (prompt("ingrese cuantas veces queres multiplicar"));

for (let i = 1; i <= salida; i= i + 1){
    let resultado = ingreso * i;
    if (i==9) {
        continue
    }
    console.log(ingreso + " X " + i + " = " + resultado);
}
let entrada = prompt("ingresa la lista del super \n Para salir ingresa ESC");
while (entrada != "ESC") {
    console.log("la lista es: " + entrada );
    entrada = prompt("ingresa la lista del super \n Para salir ingresa ESC");
}
