import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-angular';
  esconderHola = false; //variable constante
  //arregloNumeros = [1,2,3,4,5,6]
  arregloNumeros = [{ nombre: 'Karen' }, { nombre: 'Paola' }];

  eventoClick(){
    this.esconderHola = true;
  }


}


