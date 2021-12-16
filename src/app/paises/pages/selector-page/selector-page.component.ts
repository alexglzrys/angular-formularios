import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/pais-small';
import { PaisesService } from '../../services/paises/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required]
  })

  regiones!: string[];
  paises!: PaisSmall[];

  constructor(private fb: FormBuilder,
              private paisesServices: PaisesService) { }

  ngOnInit(): void {
    // Obtener el listado de regiones (continentes)
    this.regiones = this.paisesServices.regiones;

    // Escuchar cambios en el control select de regiones (subscripción al control de formulario reactivo)
    this.miFormulario.get('region')?.valueChanges.subscribe(nuevaRegion => {
      console.log(nuevaRegion)
      // Solicitar el listado de paises relacionados con la región seleccionada
      this.paisesServices.getPaisesPorRegion(nuevaRegion).subscribe(paises => {
        this.paises = paises;
        console.log(paises)
      })
    })
  }




  guardar() {
    this.miFormulario.value;
  }

}
