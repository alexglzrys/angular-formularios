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

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('Posteado')
  }

}
