//1. - DEBER : Inveritr la  PALABRA='COMERCIO ELECTRONICO'
const invertirCadena = cadena => cadena.split("").reverse().join("");
 
let cadena = "COMERCIO ELECTRONICO";
console.log("Cadena Invertida:", invertirCadena(cadena));

//Segundo Forma
const invertirCadena2 = cadena2 => {
    let nuevaCadena = "";
    for (let x = cadena2.length - 1; x >= 0; x--) {
        nuevaCadena += cadena2[x];
    }
    return nuevaCadena;
}

let cadena2 = "COMERCIO ELECTRONICO";
console.log("Original: %s, invertida: %s", cadena2, invertirCadena2(cadena2));