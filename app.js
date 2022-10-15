class Pulpas {
    constructor (precio,sabor,tamaño){
    this.precio = parseFloat(precio)
    this.sabor = sabor
    this.tamaño = tamaño
    }
}

let Pulpa1 = new Pulpas('2000', 'fresa', '120 oz')
let Pulpa2 = new Pulpas('5000', 'guanabana', '120 oz')
let Pulpa3 = new Pulpas('7000', 'maracuya', '120 oz') 

let pulpas = [Pulpa1, Pulpa2, Pulpa3]

let seleccion = pulpas.find(pulpas => pulpas.sabor == 'fresa') 
let filtro = pulpas.filter(pulpas => pulpas.sabor == 'maracuya')

console.log(seleccion)