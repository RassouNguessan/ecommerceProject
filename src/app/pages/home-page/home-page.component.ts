import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { Bannier1Component } from "../../widgets/bannier-1/bannier-1.component";
import { PurchasePromoComponent } from "../../widgets/purchase-promo/purchase-promo.component";
import { HorizontalCardComponent } from "../../widgets/horizontal-card/horizontal-card.component";
import { CardComponent } from "../../widgets/card/card.component";
import { Bannier2Component } from "../../widgets/bannier-2/bannier-2.component";

@Component({
  selector: "app-home-page",
  standalone: true,
  imports: [
    NavbarComponent,
    Bannier1Component,
    PurchasePromoComponent,
    HorizontalCardComponent,
    CardComponent,
    Bannier2Component,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {}
