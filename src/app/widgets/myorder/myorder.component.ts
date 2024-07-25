import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "../back-button/back-button.component";
import { BasketComponent } from "../basketcomponent/basketcomponent.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";
import { Banner4Component } from "../banner-4/banner-4.component";

@Component({
  selector: "app-favorites",
  standalone: true,
  templateUrl: "./myorder.component.html",
  styleUrl: "./myorder.component.scss",
  imports: [
    BackButtonComponent,
    BasketComponent,
    CommonModule,
    Banner4Component,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
  ],
})
export class MyorderComponent {
  basketData = ["Data 1", "Data 2", "Data 3", ""]; // Ajoutez autant de données que nécessaire
}
