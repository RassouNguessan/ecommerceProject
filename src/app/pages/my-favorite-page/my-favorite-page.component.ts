import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { GreatdealComponent } from "../../widgets/greatdeal/greatdeal.component";
import { Banner4Component } from "../../widgets/banner-4/banner-4.component";
import { PurchaseMessageComponent } from "../../widgets/purchase-message/purchase-message.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";

@Component({
  selector: "app-my-favorite-page",
  standalone: true,
  imports: [
    NavbarComponent,
    GreatdealComponent,
    Banner4Component,
    PurchaseMessageComponent,
    CardComponent,
    FooterComponent,
    BackButtonComponent
],
  templateUrl: "./my-favorite-page.component.html",
  styleUrl: "./my-favorite-page.component.scss",
})
export class MyFavoritePageComponent {}
