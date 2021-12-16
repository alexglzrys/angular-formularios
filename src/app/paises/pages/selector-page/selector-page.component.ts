import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required]
  })

  regiones!: string[];

  constructor(private fb: FormBuilder,
              private paisesServices: PaisesService) { }

  ngOnInit(): void {
    // Obtener el listado de regiones (continentes)
    this.regiones = this.paisesServices.regiones;
  }

  guardar() {
    this.miFormulario.value;
  }

}
