import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'todos',
    title: 'Todos Page',
    loadChildren: () => import('@app/todos/todos.routes').then(m => m.ROUTES)
  }
]