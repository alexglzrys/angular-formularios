import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  persona = {
    genero: 'F',
    notificaciones: true
  }

  // Al estas asociado esta propiedad con un ngModel, automáticamente pasa a formar parte del modelo general del formulario
  terminosCondiciones: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
