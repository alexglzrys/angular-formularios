import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais, PaisSmall } from '../../interfaces/pais-small';

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
    return this.http.get<PaisSmall[]>(`${API_URL}/region/${region}?fields=name,capital,alpha3Code`);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais | null> {
    // Si no mandan un código de país, retorno un observable de tipo null.
    // Esto previene que el servidor me arroje un status 404 o 500
    if (!codigo) return of(null);

    return this.http.get<Pais>(`${API_URL}/alpha/${codigo}`);
  }

  // Solo regreso los datos de un pais con base a su código
  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall> {
    return this.http.get<PaisSmall>(`${API_URL}/alpha/${codigo}?fields=name,capital,alpha3Code`);
  }

  // De un conjunto de fronteras (codigos de paises), retorno un arreglo con información más detallada del pais
  getNombrePaisesPorCodigos(fronteras: string[]): Observable<PaisSmall[]> {
    // Si no hay fronteras, retorno un arreglo vacio
    if (!fronteras) return of([]);

    //
    const peticionesHttp: Observable<PaisSmall>[] = []

    // por cada frontera, hago una petición http, y la respuesta (onservable) lo almaceno en un arreglo
    fronteras.forEach(codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo)
      peticionesHttp.push(peticion);
    })

    // agrupar y resolver de forma sincrona un conjunto de observables.
    // En este caso retornaría un Observable de arreglo de PaisSmall
    return combineLatest(peticionesHttp);
  }
}
