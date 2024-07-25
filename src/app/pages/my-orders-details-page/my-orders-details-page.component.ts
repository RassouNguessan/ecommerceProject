import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DetailorderComponent } from "../../widgets/detailorder/detailorder.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { Banner4Component } from "../../widgets/banner-4/banner-4.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: 'app-my-orders-details-page',
  standalone: true,
  imports: [NavbarComponent, DetailorderComponent, PurchaseMessageComponent, Banner4Component, CardComponent, FooterComponent],
  templateUrl: './my-orders-details-page.component.html',
  styleUrl: './my-orders-details-page.component.scss'
})
export class MyOrdersDetailsPageComponent {

}
