import { Router, RouterLink } from "@angular/router";
import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { PurchaseRecentViewComponent } from "../../widgets/purchase-recent-view/purchase-recent-view.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { voucherDetail } from "../../utils/types";
import { BUYED } from "../../utils/mock-products-list";
import { CommonModule } from "@angular/common";

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
    NumberWithSpacesPipe,
    CommonModule,
    RouterLink
],
})
export class PurchaseAvailableComponent {
  voucherDetail: voucherDetail[] = BUYED;
  firstProduct: voucherDetail;

  constructor(private router: Router) {
    this.firstProduct = this.voucherDetail[0];
  }

  groupDistribued() {
    this.router.navigate(["/grouped-distribution"]);
  }

  updateInfo(product: voucherDetail) {
    this.firstProduct = product;
  }
}
