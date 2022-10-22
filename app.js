//carrito

class cursos {
    constructor (nombre, precio)
    {
    this.nombre = nombre;
    this.precio = precio;
    }
}

let cursoEscogido

cursoEscogido = prompt ("Escriba el número del curso que desea cursar 1. Inglés $2000, 2. Francés $5000 3.Italiano $8000 4. Mandarin $8000 5.Japones $8000")

if (cursoEscogido !="") {
    alert("Gracias por escogernos, continue con su compra")

}

else{
    alert("No debe haber campos vacíos")
}

function cargarUnItem()
{
const ingles = new Ingles('ingles', 2000)
const frances = new Frances('frances', 5000)
const italiano = new Italiano('italiano', 8000)
const mandarin = new Italiano('mandarin', 8000)
const japones = new Japones('japones', 8000)
}

function cargarItems(carrito)
{
    let articulo;
    let seguir;
    do{
    articulo = cargarUnItem();
    carrito.push(articulo);
    seguir = prompt ("desea continuar comprando cursos? si/no")
} while(seguir =='si')
}

function mostrarCarrito(carrito)
{
    for(let articulo of carrito)
    {
        console.log("Nombre: " + cursos.precio + "\n"
                    + "Precio: " + cursos.sabor + "\n")
}
}

//sumar precios del carrito
total = carrito.reduce((suma, articulo) => {
    return suma + articulo.precio
}, 0)


const carrito = []
cargarItems(carrito);
console.log(carrito);
mostrarCarrito(carrito);




