import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreconcernsComponent } from "../storeconcerns/storeconcerns.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { HorizontalCardComponent } from "../horizontal-card/horizontal-card.component";
import { Bannier4Component } from "../bannier-4/bannier-4.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-detailorder",
  standalone: true,
  imports: [
    StoreconcernsComponent,
    BackbuttonComponent,
    CommonModule,
    HorizontalCardComponent,
    Bannier4Component,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
  ],
  templateUrl: "./detailorder.component.html",
  styleUrl: "./detailorder.component.scss",
})
export class DetailorderComponent {
  details = [
    {
      id: 1,
      commandesa: "DÉTAIL DE LA COMMANDE ( CO-GS-00000 )",
      montantBon: 2000000,
      montant: 5000000,
      frais: 5000,
      heure: "13:22",
      date: "01-01-2024",
      total: 5005000,
    },
  ];
}
