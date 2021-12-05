import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Necesario para trabajar con Formularios basados en Template
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
