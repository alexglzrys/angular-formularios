import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from "rxjs/operators";

const API_URL = 'http://localhost:3000';

/**
 * Servicio de validación asincrona, mediante HTTP
 *
 * Se requiere implementar la interfaz de AsyncValidator
 */

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  // Inyectar servicio http
  constructor(private http: HttpClient) { }

  // Implementar método de interfaz.
  // Recibo un control de formulario reactivo, y se debe devolver una promesa u observable con el objeto de error de validación, o null si la validación se cumple
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email: string = control.value;

    console.log(email)

    // El server aqui nos retorna un arreglo vacío si el email no se encuentra, o un arreglo con información del usuario si el email existe
    // Por lo que dicha respuesta, no se ajusta a lo que la interfaz debe devolver.
    // Para eso se usa RXJS para transformar el flujo de la respuesta

    // return this.http.get<any[]>(`${API_URL}/usuarios?q=${email}`);


    return this.http.get<any[]>(`${API_URL}/usuarios?q=${email}`).pipe(
      // Simular un retraso de respuesta del servidor.
      delay(3000),
      map(res => {
        // La respuesta en este caso es un arreglo, si esta vacío, el emil no existe (pasa validación), caso contrario, email existe (no se puede usar ese email, validación no pasa)
        return res.length ? { emailExiste: true } : null;
      })
    );
  }

}
