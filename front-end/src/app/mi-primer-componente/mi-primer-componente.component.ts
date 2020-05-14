import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//@nombreDecorador() -> es un decorador, es una clase especial de declaración que puede acoplarse a una clase, método, propiedad o parámetro
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Input() datos: Object;

  @Output() saludoHijo = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  SALUDAR() {
    alert('holaaaaaa');
    this.saludoHijo.emit('saludo de tu hijo');
  }

}