import { HeaderComponent } from './shared/components/header/header.component';
import { BodyComponent } from "../app/features/auth/components/body/body.component";
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,NavbarComponent ,HeaderComponent, RouterLink, BodyComponent]
})
export class AppComponent {
  title = 'Boncoin';
}
