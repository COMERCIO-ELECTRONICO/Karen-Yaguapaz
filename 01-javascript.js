//
var json = {
    nombre: 'Karen',
    edad: 25,
    soltero: false,
    fecha: new Date('1996/03/13'),
}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'Paola'

json.direccion = "Quito"

console.log(json)

delete json.direccion


console.log(json)
/*console.error()// da eror
console.info()
console.warn() //da alerta*/