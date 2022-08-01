import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule, HeaderComponent]
})
export class AppComponent {
}
