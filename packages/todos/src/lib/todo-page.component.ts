import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FooPipe } from '@app/pipes/foo.pipe';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, FooPipe],
  template: ` <p>todo-page works - {{ id | foo }}</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPageComponent {
  id = this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute) { }
}
