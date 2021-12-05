import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// listado de rutas que gestiona el módulo principal
const routes: Routes = [
  {
    path: 'template',
    // Carga peresoza hacia el módulo TemplateModule (automáticamente se asocia su archivo de rutas hijas)
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
  },
  {
    path: 'reactive',
    // Carga peresoza hacia el módulo ReactiveModule (automáticamente se asocia su archivo de rutas hijas)
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule),
  },
  {
    path: '**',
    redirectTo: 'template/basicos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
