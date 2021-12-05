import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

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
  ],
  // Listado de elementos compartidos
  exports: [
    SidemenuComponent,
  ]
})
export class SharedModule { }
