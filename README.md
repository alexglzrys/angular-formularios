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

