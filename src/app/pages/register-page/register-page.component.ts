import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BackgroundComponent } from "../../widgets/background/background.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { RegisterIndexComponent } from "../../widgets/register/register.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [NavbarComponent, BackgroundComponent, ImgBlockComponent, RegisterIndexComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
