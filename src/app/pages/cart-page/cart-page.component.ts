import { Component } from '@angular/core';
import { Banner2Component } from "../../widgets/banner-2/banner-2.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DetailbasketComponent } from "../../widgets/detailbasket/detailbasket.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [Banner2Component, PurchaseMessageComponent, CardComponent, FooterComponent, NavbarComponent, DetailbasketComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
