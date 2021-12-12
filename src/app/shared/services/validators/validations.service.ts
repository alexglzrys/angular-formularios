import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
}
