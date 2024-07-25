import { Component } from "@angular/core";
import { FooterComponent } from "../footer/footer.component";
import { PurchasePromoComponent } from "../purchase-promo/purchase-promo.component";
import { CardComponent } from "../card/card.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { Banner3Component } from "../banner-3/banner-3.component";


@Component({
  selector: "app-promos",
  standalone: true,
  templateUrl: "./promos.component.html",
  styleUrl: "./promos.component.scss",
  imports: [
    FooterComponent,
    PurchasePromoComponent,
    CardComponent,
    PurchaseRecentViewComponent,
    Banner3Component,
  ],
})
export class PromosComponent {}
