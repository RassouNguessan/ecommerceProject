import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { Bannier4Component } from "../purchase/bannier-4/bannier-4.component";
import { CardComponent } from "..//purchase/card/card.component";
import { PurchaseRecentViewComponent } from "../purchase/purchase-recent-view/purchase-recent-view.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { BackbuttonComponent } from "../../../../shared/components/backbutton/backbutton.component";
import { Bannier3Component } from "../purchase/bannier-3/bannier-3.component";




@Component({
  selector: 'app-purchase-available',
  standalone: true,
  templateUrl: './purchase-available.component.html',
  styleUrl: './purchase-available.component.scss',
  imports: [BackbuttonComponent, PurchaseRecentViewComponent, CardComponent, FooterComponent, Bannier3Component],
})
export class PurchaseAvailableComponent {
  giftNumber: number;
  giftValue: number;

  constructor(private router: Router) {
    this.giftNumber = 100;
    this.giftValue = 25000;
  }

  groupDistribued() {
    this.router.navigate(['/distributed'])
  }

}
