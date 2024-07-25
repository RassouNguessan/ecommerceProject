import { Component } from '@angular/core';
import { CardDetailComponent } from "../../widgets/card-detail/card-detail.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { CardComponent } from "../../widgets/card/card.component";

@Component({
  selector: 'app-voucher-page',
  standalone: true,
  imports: [CardDetailComponent, Banner3Component, PurchaseMessageComponent, FooterComponent, CardComponent],
  templateUrl: './voucher-page.component.html',
  styleUrl: './voucher-page.component.scss'
})
export class VoucherPageComponent {

}
