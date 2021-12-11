import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    // Especifiar controles, valores por defecto, y validación (arreglo si es más de una validación)
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(10)]],
    existencias: [ , [Validators.required, Validators.min(20)]]
  })

  // Inyectar servicio de FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // En muchas ocasiones es necesario inicializar los valores del formulario reactivo con datos que vienen desde un servicio
    // El método reset es el preferido para llenar la data en el formulario (ya que no forza a que el cuerpo de la data tenga todas las propiedades definidas en la construccion del mismo)
    this.miFormularioBasico.reset({
      nombre: 'Tarjeta de Video NH-3090 Nvidia',
      precio: 19500,
    })
  }

  campoEsValido(campo: string, typeValidation: string) {
    // Validar que el campo de formulario pasado como parámetro no tenga errores y que no haya sido tocado
    // Así como especificar que tipo de validación se debe inspeccionar
    return ((this.miFormularioBasico.controls[campo].errors?.[typeValidation]) && this.miFormularioBasico.controls[campo].touched);
  }

  guardar() {
    // Una forma correcta es deshabilitar el botón de envío si el formulario es invalido, pero depende del enfoque, ya que aqui requiero mostrar todos los mensajes de error al presionar el boton
    if (this.miFormularioBasico.invalid) {
      // Mostrar todos los mensajes de validación cuando se envíe el formulario
      this.miFormularioBasico.markAllAsTouched();
      // Evitar seguir ejecutando esta función
      return;
    }

    console.log(this.miFormularioBasico.value);
    // Resetear el formulario después del envío
    this.miFormularioBasico.reset()
  }

}
