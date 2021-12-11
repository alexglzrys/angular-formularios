import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Crear una instancia de mi formulario reactivo
  miFormularioBasico: FormGroup = new FormGroup({
    // Indicar los controles o campos que gestionará este formulario
    'nombre': new FormControl('RTX 4080ti')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
