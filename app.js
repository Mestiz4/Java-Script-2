//carrito

const cursos = [
    { nombre: "ingles", precio: 2000 },
    { nombre: "frances", precio: 3000 },
    { nombre: "portugues", precio: 3000 },
    { nombre: "italiano", precio: 8000 },
    { nombre: "mandarin", precio: 8000 },
]

let carrito = []



let seleccion = prompt ("¿Desea tomar algún curso de idiomas? si/no")

while (seleccion !="si" && seleccion !="no"){
alert("por favor ingresa si o no")
}

if (seleccion=="si"){
alert ("A continuación verás nuestra lista de cursos")
let todosLosCursos = cursos.map(
    (curso) => curso.nombre + " " + curso.precio + " $"
);
alert(todosLosCursos.join( " - " ))
} else if (seleccion == "no"){
    alert ("Hasta luego!")
}

while(seleccion != "no"){
    let producto = prompt ("Agrega un curso al carrito")
    let precio = 0

    if(producto == "ingles" || producto == "frances" || producto == "portugues" || producto == "italiano" 
    || producto == "mandarin" ){
    switch(producto){
        case "ingles":
        precio = 2000;
        break;
        case "frances":
        precio = 3000;
        break;
        case "portugues":
        precio = 3000;
        break;
        case "italiano":
        precio = 8000;
        break;
        case "mandarin":
        precio = 8000;
        break;
        default:
            break;
    }

    
            let unidades = parseInt (prompt ("Cuántos cursos desea inscribir?"))
    
    carrito.push ({producto, unidades, precio})
    console.log(carrito)
        } else {
            alert("No tenemos ese curso")
        }
seleccion = prompt ("Desea seguir añadiendo cursos? si/no")

while (seleccion == "no"){
    alert("Gracias por elegirnos")
    carrito.forEach((carritoFinal) => {
        console.log (`producto: ${carritoFinal.producto}, unidades: ${carrito.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
}
}