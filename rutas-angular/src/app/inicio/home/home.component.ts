import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:number;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRouted: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //los obserbables son asincronos
    this._activatedRouted
    .params
    .subscribe(
      (resultado)=>{
        console.log('Resultado Observable')
        console.log(resultado);
        this.id=resultado.id;
        console.log('calor de id', this.id)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  irAUsuarioListar(){
    this._router.navigate(['/usuario','listar'])
  }

  editarPokemon(){
    this._router.navigate(['/pokemon','editarpokemon'])
  }

  crearPokemon(){
    this._router.navigate(['/pokemon','crearpokemon'])
  }

}
