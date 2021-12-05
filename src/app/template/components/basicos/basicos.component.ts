import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Se pasa como parámetro la referencia hacia el formulario. Incluye: estado, valores, entre otros
  guardar(miFormulario: NgForm) {

    // No se requiere prevenir el comportamiento por defecto, ya que al importar el módulo FormsModulo, automáticamente angular gestiona el comportamiento
    console.log(miFormulario)
    console.log(miFormulario.value)
  }

}
