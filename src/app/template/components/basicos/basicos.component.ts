import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // Guardar una referencia de mi control de formulario, en esta la clase del componente.
  // De esta forma puedo traer cierta lógica usada en la vista y manejarla desde algún método de esta clase
  @ViewChild('miFormularioBasico', {static: false}) miFormulario!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  // Validación de controles de formulario por aproximación de funciones
  productoValido(): boolean {
    // Los formularios basados en template se crean cuando el elemento es renderizado.
    // Por tanto, es normal que algunos de los valores que guardan sus propiedades no esté listas. Por eso, se sugiere el uso de ?
    return this.miFormulario?.controls.producto?.invalid &&
           this.miFormulario?.controls.producto?.touched;
  }

  // Validar que campo precio tenga como mínimo la cantidad establecida en minlength
  precioInvalido(): boolean {
    return this.miFormulario?.controls.precio?.invalid &&
           this.miFormulario?.controls.precio?.touched &&
           this.miFormulario?.controls.precio?.errors?.min;
  }
  // Validar que el campo precio tenga un valor establecido
  precioRequerido(): boolean {
    return this.miFormulario?.controls.precio?.invalid &&
           this.miFormulario?.controls.precio?.touched &&
           this.miFormulario?.controls.precio?.errors?.required;
  }

  // Validar que el campo existencias tenga un valor correcto (minimo 20 unidades) - Directiva personalizada
  existenciasInvalidas(): boolean {
    // La directiva personalizada lanza un objeto con la propiedad "{customMin: true}" si no pasa la validación el control de formulario
    return this.miFormulario?.controls.existencias?.invalid &&
           this.miFormulario?.controls.existencias?.touched &&
           this.miFormulario?.controls.existencias?.errors?.customMin;
  }

  guardar() {
    // No se requiere prevenir el comportamiento por defecto, ya que al importar el módulo FormsModulo, automáticamente angular gestiona el comportamiento
    console.log(this.miFormulario)
    console.log(this.miFormulario.value)
  }

}
