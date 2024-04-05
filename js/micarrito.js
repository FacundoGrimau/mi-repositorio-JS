// CARRITO DE COMPRA:
const productos =[
    {id:1, nombre:"Classic Burger", descripcion:"Medallón de carne, cheddar, lechuga y tomate.", imagen:"../images/hamburguesas/classic-burger.jpg", precio:3000},
    {id:2, nombre:"Cheese Burger", descripcion:"Medallón de carne, cheddar y salsa bonchi.",imagen:"../images/hamburguesas/cheese-burger.jpg", precio:3500},
    {id:3, nombre:"Doble Cheddar & Bacon", descripcion:"Doble medallón de carne, bacon, extra cheddar y salsa bonchi.", imagen:"../images/hamburguesas/doble-cheddar-y-bacon.jpg", precio:4000},
    {id:4, nombre:"Bonchi Burger", descripcion:"Medallón de carne, BBQ, cheddar, bacon, lechuga, tomate y salsa bonchi.", imagen: "../images/hamburguesas/bonchi-burger.jpg", precio:3800},
    {id:5, nombre:"Crispy Chicken", descripcion:"Pechuga de pollo crujiente, lechuga y salsa bonchi.", imagen:"../images/hamburguesas/crispy-chicken.jpg", precio:3500},
    {id:6, nombre:"Veggie Burger", descripcion:"Medallón de portobellos con muzzarella, lechuga y tomate.", imagen:"../images/hamburguesas/veggie-burger.jpg", precio:3000},
    {id:7, nombre:"Clasicc Dog", descripcion:"Salchicha artesanal tipo alemana en pan de papa.", imagen:"../images/hot-dogs/clasicc-dog.jpg", precio:1800},
    {id:8, nombre:"Cheese Dog", descripcion:"Salchicha artesanal tipo alemana con cheddar en pan de papa.",imagen:"../images/hot-dogs/cheese-dog.jpg", precio:2000},
    {id:9, nombre:"Bonchi Hot-Dog", descripcion:"Salchicha artesanal tipo alemana con cheddar y bacon en pan de papa.", imagen:"../images/hot-dogs/bonchi-hot-dog.jpg", precio:2500},
    {id:10, nombre:"Papas Clásicas", descripcion:"", imagen:"../images/acompanamientos/papas-fritas.jpg", precio:1000},
    {id:11, nombre:"Papas Bonchi", descripcion:"Con cheddar y Bacon.",imagen:"../images/acompanamientos/papas-bonchi.jpg", precio:1500},
    {id:12, nombre:"Nuggets", descripcion:"", imagen:"../images/acompanamientos/nuggets.jpg", precio:1000},
    {id:13, nombre:"Gaseosas", descripcion:"", imagen:"../images/bebidas/gaseosas.jpg", precio:1000},
    {id:14, nombre:"Agua", descripcion:"", imagen:"../images/bebidas/botella-de-agua.jpg", precio:1000},
    {id:15, nombre:"Cervezas", descripcion:"", imagen:"../images/bebidas/cervezas.jpg", precio:1000},
]


const elementosCarrito = [];
const contenedorProductos = document.getElementById('productos');
const contenedorElementosCarrito = document.getElementById('elementos-carrito');
const totalSpan = document.getElementById('total');

function renderizarProductos(){
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <h3>${producto.nombre}</h3>
        <img src=${producto.imagen}>
        <h4>${producto.descripcion}</h4>
        <p>${producto.precio}</p>
        <button id="tostify" class="btn-agregar-carrito" data-id="${producto.id}">Agregar al Carrito</button> 
        `;
        contenedorProductos.appendChild(div);
    })
}

// Agregar al carrito el producto

function agregarAlCarrito(idProducto){
    const itemExistente = elementosCarrito.find(item => item.id === idProducto);
    if(itemExistente){
        itemExistente.cantidad++
    }else{
        const producto = productos.find(p => p.id === idProducto);
        if(producto){
            elementosCarrito.push({...producto, cantidad:1});

        }
    }
    renderizarCarrito();
}


// Eliminar el producto

function eliminarDelCarrito(idProducto){
    const indice = elementosCarrito.findIndex(item => item.id === idProducto);
    if(indice !== -1){
        elementosCarrito.splice(indice, 1);
        renderizarCarrito();
    }
}

function renderizarCarrito() {
    contenedorElementosCarrito.innerHTML = '';
    let precioTotal = 0;
    elementosCarrito.forEach(item =>{
            const li = document.createElement('li');
            li.textContent = `${item.nombre} x ${item.cantidad}  - $${item.precio * item.cantidad};`
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.addEventListener('click', () => eliminarDelCarrito(item.id))
            li.appendChild(btnEliminar);
            contenedorElementosCarrito.appendChild(li);
            precioTotal += item.precio * item.cantidad;
    })
    totalSpan.textContent = precioTotal;
};

function realizarCompra(){
    Swal.fire({
        title: (`Importe Total: $${totalSpan.textContent}`),
        text: "Muchas gracias por confiar en nosotros !",
        imageUrl: "../images/compra-carrito.jpg",
        imageWidth: 300,
        imageHeight: 200,
        confirmButtonText:"Aceptar"});
        elementosCarrito.length = 0;
    renderizarCarrito();
}

document.getElementById('btn-comprar').addEventListener('click',realizarCompra);

contenedorProductos.addEventListener('click',function(evento){
    if(evento.target.classList.contains('btn-agregar-carrito')){
            const idProducto = parseInt(evento.target.getAttribute('data-id'));
            agregarAlCarrito(idProducto);
        }
        });

renderizarProductos();


// Aviso de producto agregado al carrito
const tostify = document.getElementById('tostify');

tostify.addEventListener('click',()=>{
    Toastify({
        text: "Se agregó un producto al carrito",
        duration: 3000,
        position: "right",
        gravity: "top-right",
        style:{
            background: "red"
        }
    }).showToast();
});