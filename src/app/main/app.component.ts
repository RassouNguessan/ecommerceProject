import { Component } from "@angular/core";
import { RouterOutlet, RouterLink } from "@angular/router";
import { NavbarComponent } from "../widgets/navbar/navbar.component";
import { HeaderComponent } from "../widgets/header/header.component";
import { BodyComponent } from "../widgets/body/body.component";

@Component({
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    RouterLink,
    BodyComponent,
  ],
  selector: "app-root",
  standalone: true,
  template: `
    <div class="wrapper">
      <router-outlet />
    </div>
  `,
})
export class AppComponent {
  title = "Boncoin";
}
