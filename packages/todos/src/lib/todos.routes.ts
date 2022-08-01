import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./todos-page.component').then((m) => m.TodosPageComponent),
  },
  {
    path: ':id',
    loadComponent: () => import('./todo-page.component').then((m) => m.TodoPageComponent),
  }
]