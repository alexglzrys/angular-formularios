import { Component, OnInit } from '@angular/core';

// Interfaz con la estructura de cada link declarado en el sidebar menú
interface MenuI {
  texto: string;
  url: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  // Menú formularios basados en Template
  templateMenu: MenuI[] = [
    { texto: 'Básicos', url: '/template/basicos' },
    { texto: 'Dinámicos', url: '/template/dinamicos' },
    { texto: 'Switches', url: '/template/switches' }
  ];

  // Ménu formularios reactivos
  reactiveMenu: MenuI[] = [
    { texto: 'Básicos', url: '/reactive/basicos' },
    { texto: 'Dinámicos', url: '/reactive/dinamicos' },
    { texto: 'Switches', url: '/reactive/switches' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
