import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { PurchaseRecentViewComponent } from "../../widgets/purchase-recent-view/purchase-recent-view.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";

@Component({
  selector: "app-purchase-available",
  standalone: true,
  templateUrl: "./purchase-available.component.html",
  styleUrl: "./purchase-available.component.scss",
  imports: [
    BackButtonComponent,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
    Banner3Component,
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
