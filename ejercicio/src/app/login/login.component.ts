import { LoginService } from './../services/login.service';
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
  correo = '';
  seleccionadoValor;



  valorAutocomplete ='';
  arregloResultado=[];
  sugerencias=[
    'karen','paola','daniel'
  ];


  constructor(
    private readonly _router: Router,
    private readonly _loginService:LoginService
  ) { }

  ngOnInit(): void {
    /*this._loginService
    .metodoPost(
      'http://localhost:1337/usuario',
    {
      nombre: 'karen',
      edad: 24,
      correo: 'correo',
      esCasado: true
    }).subscribe(
      (resultadoPost)=>{
        console.log('Respuest de Post');
        console.log(resultadoPost);
      }
    )*/


    this._loginService
    .metodoGet('http://localhost:1337/usuario')
    .subscribe((resultadoMetodoGet)=>{
      console.log('Respuesta de Get');
      console.log(resultadoMetodoGet);
    });
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

    this._loginService
    .metodoPost(
      'http://localhost:1337/usuario',
    {
      nombre: 'karen',
      edad: this.password,
      correo: this.email,
      esCasado: true
    }).subscribe(
      (resultadoPost)=>{
        console.log('Respuest de Post');
        console.log(resultadoPost);
      }
    )

    if(this.password === '1234'){
      alert(this.email);
      if (this.seleccionadoValor === 'karen') {
        alert('es estudiante');
        this._router.navigate([
          '/estudiante','perfil'
        ])
      }
    }if(this.password === '1234'){
      if (this.seleccionadoValor === 'paola') {
        alert('es profesor');
        this._router.navigate([
          '/profesor','perfil'
        ])
      }
    }else{
      alert('no ingreso')
    }
  }

  eliminarRegistroPorID(){
    this._loginService.metodoDelete('http://localhost:1337/usuario/2')
    .subscribe((respuestaDelete)=>{
      console.log('respuesta delete');
      console.log(respuestaDelete);
    });
  }
}
