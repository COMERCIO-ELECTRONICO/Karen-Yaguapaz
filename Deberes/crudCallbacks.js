/*usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO 
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario*/

var crud = [{
    nombre:'Karen',
    edad: 24,
    fechaNacimiento:new Date('1996/03/13'),
    telf: 0987654321
},]
    


//CREAR
function crearUsuario(arreglo, datos, i, cb) {
    arreglo[i] = datos
    cb({
        mensaje1: "Datos creados",
        arreglo
    }
)}

console.log('-----------------Crear---------------')
crearUsuario(crud, { nombre: "Paola", edad: "24", Fecha_Nacimiento: "1994/03/13", Telf: "0987654321"}, 0, (mensaje1) => {
    console.log(mensaje1)
})

//EDITAR
var nombreNuevo= [{
    nombre:'Diana',
    edad: 20,
    fechaNacimiento:new Date('1996/03/13'),
    telf: 0987654321
},]
function anadirNombre(crud, nombre, cb){
    crud.push(nombre);//el metodo push solo funciona con arreglos
    cb({
        mensaje2:'Editado con éxito',
        crud
    })
}
console.log('-----------------Editar---------------')
anadirNombre(crud, nombreNuevo, (mensaje2)=>{
    console.log(mensaje2)
})

//ELIMININAR
function eliminarUsuario(arreglo, datos, i, cb) {
    arreglo[i] = datos
    cb({
        mensaje: "Datos Eliminados",
        arreglo
    }
    )
}

console.log('-----------------Elimininado---------------')
eliminarUsuario(crud, "Eliminado" , 0, (mensaje) => {
    console.log(mensaje)
})



//LISTADO
function listarUsuario(arreglo,cb){
    arreglo.forEach(usuario => {
        console.log(usuario)
    });
    cb({
        mensaje:'lista de usuario'
    })
}
console.log('-----------------Listado---------------')
listarUsuario(crud, (respuestaMensaje)=>{
    console.log(respuestaMensaje);
})