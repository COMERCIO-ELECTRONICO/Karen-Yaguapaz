import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  seleccionadoValor;



  valorAutocomplete ='';
  arregloResultado=[];
  sugerencias=[
    'karen','paola','daniel'
  ];


  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  buscarSugerencia(evento){
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    }else{
      this.sugerencias = ['karen','paola','daniel'];
    }
  }

  valorSeleccionado(evento){
    console.log(evento);
    this.seleccionadoValor = evento;
  }

  ingresar(){
    console.log(this.valorAutocomplete);

    if(this.password === '1234'){
      alert(this.email);
      if (this.seleccionadoValor === 'karen') {
        alert('es estudiante');
        this._router.navigate([
          '/estudiante','perfil'
        ])
      }
    }else{
      alert('no ingreso')
    }
  }
}
