import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  nombre1:'';
  nombre2:'';
  apellido1:'';
  apellido2:'';
  email:'';
  telefono:'';
  password:'';
  passwordConfirm:'';


  constructor(
    private readonly _activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((resultadoParametros)=>{
      console.log(resultadoParametros)
    });
  }

  crearOEditar(){
    if(this.password === this.passwordConfirm){
      alert('Contraseña Correcta');
    }else{
      alert('Contraseña incorrecta');
    }
  }

}
