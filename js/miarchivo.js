/* // Datos para ingresar al sitio:
let ingresoDeNombre = prompt("Ingresa tu nombre");
let ingresoDeApellido = prompt("Ingresar tu apellido");
const EDAD = parseInt(prompt("Ingresar Edad"));

function saludo(nombre, apellido){
    if ((nombre != "") && (apellido != "")) {
        alert("Bienvenido/a Bonchi Burger " + ingresoDeNombre + " " + ingresoDeApellido + " ¿Cómo estás?");
        console.log("El nombre completo del usuario es: " + nombre + " " + apellido);
    } else {
        alert("Error: Por favor, completar los datos solicitados.");
    }  
}

function comprobarEdad(){
    if(EDAD >= 18){
       return("Es mayor de edad");
    }else {
        return("No es mayor de edad"); 
    }
}

function mostrar(mensaje){
    console.log(mensaje);
}

saludo(ingresoDeNombre, ingresoDeApellido);
resultadoEdad = comprobarEdad();
mostrar(resultadoEdad); */