//Arreglo de json

var arregloJson = [
    {
        nombre: 'Karen',
        edad: 24,
        fechaNacimiento: new Date(),
        telf: 0987654321
    }
]

var usuarioNuevo = 
{
    nombre: 'Diana',
    edad: 24,
    fechaNacimiento: new Date(),
    telf: 0987654321
}

//callback crear UN USUARIO 
function crearUsuario(arreglo, usuarioACrear, cb) {
    var usuarioEncontrado = arreglo
        .find(
            (item) => {
                return item.nombre === usuarioACrear.nombre
            })
    // console.log(usuarioEncontrado);
    if (usuarioEncontrado !== undefined) {
        arreglo.push(usuarioACrear)
        cb({
            mensaje: 'Usuario creado',
            usuario: usuarioACrear,
            arreglo
        })
    } else {
        cb({
            mensaje: 'Usuario existe',
            usuario: usuarioACrear,
            arreglo
        })
    }
}

crearUsuario(arregloJson, usuarioNuevo, (respuestaCallback)=>{
    console.log(`mensaje:${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario.nombre}, arreglo: ${respuestaCallback.arreglo}`)
    console.log(respuestaCallback.arreglo)
})

//Eliminar
function eliminarUsuario(arreglo, nombreUsuario, cb) {

    var indiceUsuario = arreglo
        .findIndex(
            (item) => {
                return item.nombre === nombreUsuario
            })
    console.log(indiceUsuario);
    if (indiceUsuario !== -1) {
        arreglo.splice(indiceUsuario, 1)
        cb({
            mensaje: 'eliminado'
        })
    } else {
        cb({
            mensaje: 'eliminado no'
        })
    }

}

eliminarUsuario(arregloJson, 'Karen', (resultadoCallback) => {
    console.log(resultadoCallback)
    console.log(arregloJson)
})
console.log(arregloJson)
