import { Component } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-purchases",
  standalone: true,
  imports: [FooterComponent],
  templateUrl: "./purchases.component.html",
  styleUrl: "./purchases.component.scss",
})
export class PurchasesComponent {}
