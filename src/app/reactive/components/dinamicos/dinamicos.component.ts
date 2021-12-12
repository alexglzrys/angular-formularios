import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }

}
