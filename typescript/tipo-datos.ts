//tipos de datos
const nombre:string = 'Karen';
const numero:number = 1;
const Bool:boolean = true;
const objetoUsual:object = {
    nombre:'Karen'
}

//arreglos
const arregloUno: Array<number> =[];
const arregloDos: number[] =[];

//varios tipados
const nombreDos:string|number = 1;
const arreglo1:Array<boolean|number> =[];
const arreglo2:(string|object)[]=[];


let variableLet:number;
const cariableConst:number=1;

let cualquierVarible:any;

function sumar(num1?:number, num2?:number):number{
    let a = 2;
    let b = 3;

    if(num1){
        a=num1
    }
    if(num2){
        b=num1
    }
    return a+b
};

sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar());
