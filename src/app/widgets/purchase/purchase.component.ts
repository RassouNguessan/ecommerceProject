import { Component } from "@angular/core";
import { Banner3Component } from "../banner-3/banner-3.component";
import { Banner4Component } from "../banner-4/banner-4.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { CommonModule } from "@angular/common";
import { Banner1Component } from "../banner-1/banner-1.component";
import { Banner2Component } from "../banner-2/banner-2.component";
import { CardComponent } from "../card/card.component";
import { PurchaseAvailableComponent } from "../purchase-available/purchase-available.component";
import { PurchaseMostComponent } from "../purchase-most/purchase-most.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { PurchaseMessageComponent } from "../purchase-message/purchase-message.component";
@Component({
  selector: "app-purchase",
  standalone: true,
  templateUrl: "./purchase.component.html",
  styleUrl: "./purchase.component.scss",
  imports: [
    Banner1Component,
    CardComponent,
    Banner2Component,
    PurchaseAvailableComponent,
    Banner3Component,
    PurchaseMostComponent,
    PurchaseRecentViewComponent,
    FooterComponent,
    CommonModule,
    Banner4Component,
    PurchaseMessageComponent
],
})
export class PurchaseComponent {
  isVisible: boolean;

  constructor(){
    this.isVisible = false;
  }

  onIs() {
    this.isVisible = !this.isVisible;
  }
}
