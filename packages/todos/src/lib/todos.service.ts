import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Todo } from './todos.types';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todos.asObservable();

  constructor(private http: HttpClient) { }

  fetchTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      tap(todos => this.todos.next(todos))
    )
  }
}
