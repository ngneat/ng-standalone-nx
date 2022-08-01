import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="mt-1">
      <li *ngFor="let todo of todos$ | async">
        {{ todo.title }}
      </li>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosPageComponent implements OnInit {
  todos$ = this.todosService.todos$;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos().subscribe();
  }
}
