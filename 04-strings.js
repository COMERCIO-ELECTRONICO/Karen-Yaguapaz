var nombre = 'Karen'
//console.log(nombre.length);
//console.log(nombre.indexOf('e')); //busca la posición de la letra a indicada
//console.log(nombre.search('r')); //busca la posición de la letra a indicada
//console.log(nombre.slice(1,3)); //divide el string desde donde se quiere hasta donde
//console.log(nombre.substr(1,3));// es igual al slice pero toma una letra más es decir la ultima posición
//console.log(nombre.toLowerCase()); //devuelve el valor en minúsculas de la cadena que realiza la llamada.
//console.log(nombre.toUpperCase()); //método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.

var texto = ' hola mundo :v'
//var a = /sds/g //expersiones regulares
console.log(texto.replace('hola','hello'))

console.log(texto.concat(', ',nombre)) //Concatenamos el STRING

console.log(`${texto} mas mi nombre: ${nombre}`)// otra forma de concatenar

console.log(texto.trim()) //elimina los espacios del inicio y final

console.log(texto.split('')) // divide el string 

console.log(texto.charAt(1)) //retorna la letra y el indice de donde se tome


//DEBER PALABRA = 'COMERCIO ELECTRONICO' -> debe salir la palabra invertida
/*DEBER realizar fotografias de 20 megapixeles y*/