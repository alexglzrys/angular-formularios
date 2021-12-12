/**
 * Archivo de CONSTANTES y FUNCIONES globales
 * para asistir a temas de Validación.
 *
 * Se recomienda en proyectos pequeños, cuyas funciones de validación no dependan de servicios externos para hacer su trabajo
 * Simplemente se importa cada constante o función que se desa utilizar
 * en la validación de componentes de esta aplicación
 */

import { FormControl, ValidationErrors } from "@angular/forms";


// Expresiónes regular a validar
// Se exportan para que sean importadas en el componente que desea usar estos patrones de validación
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


// Funciones con reglas de validación
export const noPuedeSerRoot = (control: FormControl): ValidationErrors | null => {
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
