import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    // Especificar un arreglo de controles de formulario reactivos
    favoritos: this.fb.array([
      // Cada elemento es un formControl, pero se puede resumir como []
      // this.fb.control('', Validators.required),

      ['Metal Slug', Validators.required],
      ['Super Tux'],
      ['Super Mario Bros 3']
    ])
  })

  // Un nuevo control de formulario reactivo independiente (no forma parte de un formGroup)
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  // getter para obtener el conjunto (arreglo) de controles reactivos que hacen referencia al path de favoritos
  get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string, typeValidation: string): boolean {
    return this.miFormulario.controls[campo].errors?.[typeValidation] && this.miFormulario.controls[campo].touched;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    // Agregar un nuevo favorito al arreglo de controles de formulario reactivo
    // Para eso nos valemos del getter que nos retorna el formArray

    // Mediante un FormControl
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))

    // Mediante el servicio de FormBuilder (el cual puede crear un control)
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }

}
