import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';

/**
 * Módulo que agrupa Componentes, Direcitvas, Pipes, etc.
 * que se desea compartir con el resto de otros módulos de nuestra aplicación
 */

@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Los componentes de este módulo harán uso de las directivas (routerLink, routerLinkActive)
  ],
  // Listado de elementos compartidos
  exports: [
    SidemenuComponent,
  ]
})
export class SharedModule { }
