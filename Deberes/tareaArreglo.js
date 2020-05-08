/* arreglo uno, multiplique * 2, y  filtrar los pares, usar map y filter
arreglo dos, filter los impares , sumar + 2 */

var json = {
    arreglos: {
      uno: [2, 4, 5, 8, 6, 9, 10],
      dos: [
        { valor: 1 },
        { valor: 4 },
        { valor: 2 },
        { valor: 24 },
        { valor: 100 },
        { valor: 23 },
        { valor: 45 },
        { valor: 23 },
      ],
    },
  };

  var arregloUno = json.arreglos.uno
  .map(
      (item) => {
          return item * 2;
      }
  )
  var arregloPares = json.arreglos.uno
  .filter(
      (item) => {
          return (item % 2)== 0; 
      }
  )
 
  
  var arregloImpares =json.arreglos.dos
  .filter(
      (item) => {
          return (item.valor % 2)== 1; 
      }
      
  )
  var arregloSuma = arregloImpares
  .map(
      (item) => {
          return (item.valor + 2);
      }
  )
  console.log ('Números multipicados por 2 =>',arregloUno);
  console.log ('Números Pares =>',arregloPares);
  console.log ('Números Impares =>',arregloImpares);
  console.log ('Números Impares + 2 =>',arregloSuma);