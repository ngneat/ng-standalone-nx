import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <a routerLink="">Home</a>
    <a routerLink="todos">Todos</a>
  `,
  styles: [],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent { }
