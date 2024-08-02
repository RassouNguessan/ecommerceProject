import { Component } from '@angular/core';
import { Banner2Component } from "../../widgets/banner-2/banner-2.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DetailbasketComponent } from "../../widgets/detailbasket/detailbasket.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [Banner2Component, PurchaseMessageComponent, CardComponent, FooterComponent, NavbarComponent, DetailbasketComponent, BackButtonComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
