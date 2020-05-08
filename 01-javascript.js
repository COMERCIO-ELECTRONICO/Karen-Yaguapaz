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



var json2 = {
    nombre: 'Karen',
    edad: 25,
    soltero: false,
    fecha: new Date('1996/03/13'),
    intereses: {
        hobbies: [
            'música',
            'películas'
        ],
        peliculas: [{
            nombre: '',
            tipo: '',
            esBuena: true,
        },
        {
            nombre: '',
            tipo: '',
            esBuena: true,
        }
        ]
    },
    
    familia:[
        {
            nombre: '',
            edad: ''
        }
    ]

}

//metodo stringify a nuestro objeto le hace string
var jsoneString = JSON.stringify(json2)

console.log(json2)
console.log(jsoneString)


// Parse lo vuelve a hacer objeto
var jsonParse = JSON.parse(jsoneString)
console.log(jsonParse)
