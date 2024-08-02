import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DetailorderComponent } from "../../widgets/detailorder/detailorder.component";
import { PurchaseAvailableComponent } from "../../widgets/purchase-available/purchase-available.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: 'app-my-vouchers-page',
  standalone: true,
  imports: [NavbarComponent, DetailorderComponent, PurchaseAvailableComponent, Banner3Component, PurchaseMessageComponent, CardComponent, FooterComponent],
  templateUrl: './my-vouchers-page.component.html',
  styleUrl: './my-vouchers-page.component.scss'
})
export class MyVouchersPageComponent {

}
