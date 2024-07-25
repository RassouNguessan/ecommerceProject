import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BasketComponent } from "../../widgets/basketcomponent/basketcomponent.component";
import { Banner4Component } from "../../widgets/banner-4/banner-4.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { MyorderComponent } from "../../widgets/myorder/myorder.component";

@Component({
  selector: 'app-my-orders-page',
  standalone: true,
  imports: [NavbarComponent, BasketComponent, Banner4Component, PurchaseMessageComponent, CardComponent, FooterComponent, MyorderComponent],
  templateUrl: './my-orders-page.component.html',
  styleUrl: './my-orders-page.component.scss'
})
export class MyOrdersPageComponent {

}
