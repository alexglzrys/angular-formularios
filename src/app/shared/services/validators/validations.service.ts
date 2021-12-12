import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

/**
 * Servicio que agrupa PROPIEDADES Y MÉTODOS públicos de validación
 * que pueden ser inyectado en todo componente que necesite ser validado
 *
 * Se recomienda en proyectos complejos
 */

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  // Expresiónes regular a validar
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Al encapsular nuestras validaciones personalizadas dentro de un servicio, permite inyectar otros servicios de los cuales dependan algunas validaciones
  constructor() { }

  noPuedeSerRoot(control: FormControl): ValidationErrors | null {
    const currentValue: string = control.value?.trim().toLowerCase();
    if (currentValue === 'root') {
      // No pasa la validación, retornar un objeto con la descripción del error (ValidationErrors)
      return {
        noRoot: true,
        description: 'El valor no puede ser root'
      }
    }
    // Retornar Null si la validación es correcta
    return null;
  }

  // Validar que dos campos sean iguales
  camposNoIguales(campo1: string, campo2: string) {
    // En validaciones compuestas siempre se retorna una función, que a su vez retorna un objeto de error de validación o null
    // Esta función recibe un grupo de controles de formulario para poder insepeccionar sus valores y establecerle mensajes de error de forma manual
    // Se retorna una función por que para pasarle los campos como argumento que se desean valdiar, se tiene que invocar la función en la sección de declaración de Validaciones
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        // No pasa validación.
        // Solo colocar el mensaje de error en el campo 2 (confirmar contraseña)
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }
      // La validación es correcta, retirar todo mensaje de error referente a esta validación
      // Hay que tener cuidado, null retira todo error, inclusive de otras validaciones en este campo
      formGroup.get(campo2)?.setErrors(null);
      return null
    }
  }
}
