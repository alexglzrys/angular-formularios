import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  // Modelo
  persona: Persona = {
    nombre: 'Alejandro',
    favoritos: [
      {id: 1, nombre: "Matal Slug"},
      {id: 2, nombre: "Mario Bros 3"}
    ]
  }
  nuevo_juego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Posteado')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego() {
    // Crear estructura de un nuevo Juego Favorito
    const nuevoJuegoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevo_juego
    }

    this.persona.favoritos.push({...nuevoJuegoFavorito})
    this.nuevo_juego = ''
  }

}
