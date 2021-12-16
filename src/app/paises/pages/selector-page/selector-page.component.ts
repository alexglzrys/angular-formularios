import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Pais, PaisSmall } from '../../interfaces/pais-small';
import { PaisesService } from '../../services/paises/paises.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    fronteras: ['', Validators.required]
  })

  regiones!: string[];
  paises!: PaisSmall[];
  fronteras!: string[];

  constructor(private fb: FormBuilder,
              private paisesServices: PaisesService) { }

  ngOnInit(): void {
    // Obtener el listado de regiones (continentes)
    this.regiones = this.paisesServices.regiones;

    // Escuchar cambios en el control select de regiones (subscripción al control de formulario reactivo)
    /*this.miFormulario.get('region')?.valueChanges.subscribe(nuevaRegion => {
      console.log(nuevaRegion)
      // Solicitar el listado de paises relacionados con la región seleccionada
      this.paisesServices.getPaisesPorRegion(nuevaRegion).subscribe(paises => {
        this.paises = paises;
        console.log(paises)
      })
    })*/

    // Escuchar cambios en el control select de regiones (operadores RXJS anidados)
    this.miFormulario.get('region')?.valueChanges.pipe(
      // Acciones secundarias, se usa el operador tap
      tap(( _ ) => {
        // ( _ ), nomenclatura para indicar que no me interesa lo que venga en flujo de información en este momento
        // Limpiar el valor del select hijo, si el select padre cambia
        this.miFormulario.get('pais')?.reset('');
      }),
      // Encadenar suscripciones, evita el suscription hall
      switchMap(nuevaRegion => this.paisesServices.getPaisesPorRegion(nuevaRegion))
    ).subscribe(paises => {
      this.paises = paises;
    });


    // Suscripción a cambios en el select de Pais
    this.miFormulario.get('pais')?.valueChanges.pipe(
      tap(( _ ) => {
        // Si el país cambia, limpiar el select de fronteras, y resetear mi arreglo de fronteras
        this.miFormulario.get('fronteras')?.reset('')
        this.fronteras = [];
      }),
      switchMap(nuevoCodigoPais => this.paisesServices.getPaisPorCodigo(nuevoCodigoPais))
    ).subscribe(pais => {
      // No me interesa toda la información del país, solo sus posibles fronteras para mostrarlas en el select.
      this.fronteras = pais?.borders || [];
      console.log(pais)
    })
  }




  guardar() {
    this.miFormulario.value;
  }

}
