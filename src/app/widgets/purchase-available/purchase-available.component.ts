import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { Bannier3Component } from "../bannier-3/bannier-3.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-purchase-available",
  standalone: true,
  templateUrl: "./purchase-available.component.html",
  styleUrl: "./purchase-available.component.scss",
  imports: [
    BackbuttonComponent,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
    Bannier3Component,
  ],
})
export class PurchaseAvailableComponent {
  giftNumber: number;
  giftValue: number;

  constructor(private router: Router) {
    this.giftNumber = 100;
    this.giftValue = 25000;
  }

  groupDistribued() {
    this.router.navigate(["/distributed"]);
  }
}
