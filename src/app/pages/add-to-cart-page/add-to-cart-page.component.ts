import { Component } from '@angular/core';
import { CardDetailComponent } from "../../widgets/card-detail/card-detail.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BuyvouchersComponent } from "../../widgets/buyvouchers/buyvouchers.component";
import { Banner4Component } from "../../widgets/banner-4/banner-4.component";

@Component({
  selector: 'app-add-to-cart-page',
  standalone: true,
  imports: [CardDetailComponent, Banner3Component, PurchaseMessageComponent, CardComponent, FooterComponent, NavbarComponent, BuyvouchersComponent, Banner4Component],
  templateUrl: './add-to-cart-page.component.html',
  styleUrl: './add-to-cart-page.component.scss'
})
export class AddToCartPageComponent {

}
