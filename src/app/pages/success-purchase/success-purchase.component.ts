import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { OrderSuccessComponent } from "../../widgets/order-success/order-success.component";

@Component({
  selector: "app-success-purchase",
  standalone: true,
  imports: [NavbarComponent, OrderSuccessComponent],
  templateUrl: "./success-purchase.component.html",
  styleUrl: "./success-purchase.component.scss",
})
export class SuccessPurchaseComponent {}
