import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  // Especificar nombre de la directiva,
  // si funcionará como parte de la validación de un control de formulario, especificar el ngModel
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    }
  ]
})
export class CustomMinDirective implements Validator {

  // El valor minimo que puede contener el control de formulario al cual se le asociará esta directiva personalizada
  @Input() minimo!: number

  constructor() { }

  // Implementar el método definido en la interfaz Validator
  // Esta directiva se usará para validar entradas en un control de formulario
  validate(control: FormControl) {
    // Almacenar el valor actual que contiene el control de formulario
    const inputCurrentValue = Number(control.value);

    console.log('Valor actual', inputCurrentValue)
    console.log('Valor mínimo aceptable', this.minimo)

    // Retornar un objeto con nombre de propiedad igual al del nombre de esta directiva en "true" si hay error de validación,
    // caso contrario, retornar null si la validación es exitosa
    return (inputCurrentValue >= this.minimo) ? null : { customMin: true }
  }

}
