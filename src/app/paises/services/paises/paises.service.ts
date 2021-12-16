import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaisSmall } from '../../interfaces/pais-small';

const API_URL = environment.url_paises
@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  // Los objetos y arreglos se pasan por referencia, para prevenir modificaciones no deseadas, mejor declaramos en privado
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  // Retornar con un getter el contenido de mi arreglo, (desestructuración para pasar un nuevo arreglo)
  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${API_URL}/region/${region}?fields=name`);
  }
}
