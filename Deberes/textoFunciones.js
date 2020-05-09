/*UTILICEN FUNCIONES
- primera palabra en mayuscula
- la palabra de la mitad en mayuscula
- ultima palabra  en mayuscula
- sumar todos los punto
- sumar todos las comas*/

let text = "Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de 'Superresolución' que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle)."

var mayuscula = (text)=>{
    var PrimerPalabra = text.split(" ")[0]
    return PrimerPalabra
}
console.log('-- Primera palabra en mayúscula --')
console.log(mayuscula(text.toUpperCase()))

var minuscula = (text)=>{
    var UltimaPalabra = text.split(" ")
    ultima = UltimaPalabra[UltimaPalabra.length -1]
    return ultima
}
console.log('-- Última palabra en mayúscula --')
console.log(minuscula(text.toUpperCase()))

var medio = (text)=>{
    var PalabraMedia = text.split(" ")
    media = PalabraMedia[(PalabraMedia.length -1)/2]
    return media
}
console.log('-- Palabra de la mitad en minúscula --')
console.log(medio(text.toUpperCase()))

var comas = (text)=>{
    var coma =text.split(",").length-1
    return coma
}
console.log("-- Cantidad de comas --")
console.log(comas(text))

var puntos = (text)=>{
    var punto=text.split(".").length-1
    return punto
}
console.log("-- Cantidad de puntos --")
console.log(puntos(text))