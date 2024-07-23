import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { BasketComponent } from "../basketcomponent/basketcomponent.component";
import { Bannier4Component } from "../bannier-4/bannier-4.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-favorites",
  standalone: true,
  templateUrl: "./myorder.component.html",
  styleUrl: "./myorder.component.scss",
  imports: [
    BackbuttonComponent,
    BasketComponent,
    CommonModule,
    Bannier4Component,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
  ],
})
export class MyorderComponent {
  basketData = ["Data 1", "Data 2", "Data 3", ""]; // Ajoutez autant de données que nécessaire
}
