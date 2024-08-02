import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { CartsuccessComponent } from "../../widgets/cartsuccess/cartsuccess.component";

@Component({
  selector: 'app-success-cart',
  standalone: true,
  imports: [NavbarComponent, CartsuccessComponent],
  templateUrl: './success-cart.component.html',
  styleUrl: './success-cart.component.scss'
})
export class SuccessCartComponent {

}
