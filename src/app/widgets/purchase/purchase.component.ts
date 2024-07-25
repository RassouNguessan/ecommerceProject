import { Component } from "@angular/core";
import { PurchasePromoComponent } from "../purchase-promo/purchase-promo.component";
import { CardComponent } from "../card/card.component";
import { PurchaseAvailable2Component } from "../purchase-available-2/purchase-available.component";
import { PurchaseMostComponent } from "../purchase-most/purchase-most.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "../footer/footer.component";
import { Banner1Component } from "../banner-1/banner-1.component";
import { Banner2Component } from "../banner-2/banner-2.component";
import { Banner3Component } from "../banner-3/banner-3.component";
import { Banner4Component } from "../banner-4/banner-4.component";

@Component({
  selector: "app-purchase",
  standalone: true,
  templateUrl: "./purchase.component.html",
  styleUrl: "./purchase.component.scss",
  imports: [
    Banner1Component,
    PurchasePromoComponent,
    CardComponent,
    Banner2Component,
    PurchaseAvailable2Component,
    Banner3Component,
    PurchaseMostComponent,
    Banner4Component,
    PurchaseRecentViewComponent,
    FooterComponent,
    CommonModule,
  ],
})
export class PurchaseComponent {
  isVisible = false;

  onIs() {
    this.isVisible = !this.isVisible;
  }
}
