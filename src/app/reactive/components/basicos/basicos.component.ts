import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Esquema para formualarios reactivos Básicos en estructura
  // Crear una instancia de mi formulario reactivo
  /*miFormularioBasico: FormGroup = new FormGroup({
    // Indicar los controles o campos que gestionará este formulario
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(4)
  })*/

  // Estructura para formularios reactivos Complejos en estructura
  // Es necesario inyectar el servicio de FormBuilder para proceder a construir la estructura de nuestro formulario
  miFormularioBasico: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti'],
    precio: [15200],
    existencias: [4]
  })

  // Inyectar servicio de FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
