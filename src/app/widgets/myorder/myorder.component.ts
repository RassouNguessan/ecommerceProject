import { Component } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { BasketComponent } from "../../widgets/basketcomponent/basketcomponent.component";
import { CommonModule } from "@angular/common";
import { Banner4Component } from "../../widgets/banner-4/banner-4.component";
import { PurchaseRecentViewComponent } from "../../widgets/purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../../widgets/card/card.component";
import { FooterComponent } from "../../widgets/footer/footer.component";

@Component({
  selector: "app-my-orders",
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
export class  MyorderComponent {
  basketData = ["Data 1", "Data 2", "Data 3", ""]; // Ajoutez autant de données que nécessaire
}
