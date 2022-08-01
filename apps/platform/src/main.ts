import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { routes } from "./app/app-routes";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
}).catch(err => console.error(err));