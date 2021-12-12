## Comandos

```
// Crear módulo con archivo de rutas (hijas)
ng g m template --routing

// Crear componente sin archivo de test y estilo inline
ng g c reactive/components/basicos --skip-tests -is
```

### Registrar rutas hijas mediante Lazy Load

```
// Routing Módulo N
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

// Routing Módulo Principal
const routes: Routes = [
  {
    path: 'template',
    // Carga peresoza hacia el módulo TemplateModule (automáticamente se asocia su archivo de rutas hijas)
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
  }
];
```

## Formularios basados en Template

La mayor parte de la lógica o configuración se encuentra declarada en el Template (vista del componente)

- Angular se encarga de manejar la mayor parte del formulario de forma automática
- Se recomienda para formularios simples
- Se requiere importar el módulo de **FormsModule**

## Formularios reactivos

- El template es lo más limpio posible
- Toda la lógica reside en el lado de TypeScript (Clase del componente)
- Permiten gestionar formularios complejos, puesto que se tiene el control del lado del código
- Se requiere importar el módulo de **ReactiveFormsModule**
- Se requiere inyectar el servicio **FormBuilder** para estructuras de formulario complejas
