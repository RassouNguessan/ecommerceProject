import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DetailbasketComponent } from "../../widgets/detailbasket/detailbasket.component";
import { Banner2Component } from "../../widgets/banner-2/banner-2.component";
import { PurchaseAvailableComponent } from "../../widgets/purchase-available/purchase-available.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [NavbarComponent, DetailbasketComponent, Banner2Component, PurchaseAvailableComponent, CardComponent, FooterComponent],
  templateUrl: './confirmation-page.component.html',
  styleUrl: './confirmation-page.component.scss'
})
export class ConfirmationPageComponent {

}
