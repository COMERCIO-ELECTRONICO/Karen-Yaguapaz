//A las interfaces se les conoce como firmas
interface persona{
    nombre: string,
    apellido:string,
    edad: number,
    esSoltero: boolean
}

interface correo{
    email?:string
}

//a una interfaz se le puede ederar otra interfaz con 'extens' y con ',' se puede poner más interfaces
interface trabajo extends correo, persona{
    nombreTrabajo: string
}

//const policia: persona | correo | trabajo = {
  //  apellido:'Perez',
  //  edad:30,esSoltero:true,
  //  nombre:'Juan'
//}

const policia: trabajo = {
    apellido: '',
    edad:1,
    esSoltero:false,
    nombre:'',
    nombreTrabajo:''
}

//TIPO DE CASTEO -> sirve para decir el tipo de dato o para transaformar un tipo de dato
const valor = 1;
//AS
//valor as number
//<tipoDato>Variable
<number>valor
