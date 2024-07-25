import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { Banner1Component } from "../../widgets/banner-1/banner-1.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { Banner2Component } from "../../widgets/banner-2/banner-2.component";
import { Banner3Component } from "../../widgets/banner-3/banner-3.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [NavbarComponent, Banner1Component, PurchaseMessageComponent, CardComponent, Banner2Component, Banner3Component, FooterComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
