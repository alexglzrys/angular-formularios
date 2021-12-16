import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  // Los objetos y arreglos se pasan por referencia, para prevenir modificaciones no deseadas, mejor declaramos en privado
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europa', 'Oceanía'];

  // Retornar con un getter el contenido de mi arreglo, (desestructuración para pasar un nuevo arreglo)
  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }
}
