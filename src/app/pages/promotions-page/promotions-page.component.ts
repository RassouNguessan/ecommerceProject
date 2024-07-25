import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { CardComponent } from "../../widgets/card/card.component";

@Component({
  selector: 'app-promotions-page',
  standalone: true,
  imports: [NavbarComponent, PurchaseMessageComponent, Banner3Component, FooterComponent, CardComponent],
  templateUrl: './promotions-page.component.html',
  styleUrl: './promotions-page.component.scss'
})
export class PromotionsPageComponent {

}
