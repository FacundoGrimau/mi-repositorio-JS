// Datos para ingresar al sitio:
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
mostrar(resultadoEdad);


// Ciclo a utilizar para los productos del menu con tope máximo :
for (let productos = 0; productos <= 10; productos++) {
    if (productos === 6){
        break;
    }
    console.log(productos);
}


//Array de objetos de Productos, en este caso de hamburguesas
const productosArray =[
    new Producto("1","Classic Burger","Medallón de carne, cheddar, lechuga y tomate.","/images/hamburguesas/classic-burger.jpg",3000),
    new Producto("2","Cheese Burger","Medallón de carne, cheddar y salsa bonchi.","/images/hamburguesas/cheese-burger.jpg",3500),
    new Producto("3","Doble Cheddar & Bacon","Doble medallón de carne, bacon, extra cheddar y salsa bonchi.","/images/hamburguesas/doble-cheddar-y-bacon.jpg",4000),
    new Producto("4","Bonchi Burger","Medallón de carne, BBQ, cheddar, bacon, lechuga, tomate y salsa bonchi.","/images/hamburguesas/bonchi-burger.jpg",3800),
    new Producto("5","Crispy Chicken","Pechuga de pollo crujiente, lechuga y salsa bonchi.","/images/hamburguesas/crispy-chicken.jpg",3500),
    new Producto("6","Veggie Burger","Medallón de portobellos con muzzarella, lechuga y tomate.","/images/hamburguesas/veggie-burger.jpg",3000),
]

//llamamos a nuestro nodos desde html
const contenedorProductos = document.getElementById("productos-container");

//ahora vamos a crear una funcion que itere y cree una nueva card
function agregarCards(productos){
    productos.forEach(producto =>{
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                            <h3>${producto.nombre}</h3>
                            <img src=${producto.imagen} alt="">
                            <p>${producto.description}</p>
                            <p>precio: $ ${producto.precio}</p>
                            `
    contenedorProductos.appendChild(card);
    })
}

agregarCards(productosArray);