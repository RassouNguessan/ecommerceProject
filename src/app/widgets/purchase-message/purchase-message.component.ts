import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-purchase-message",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./purchase-message.component.html",
  styleUrl: "./purchase-message.component.scss",
})
export class PurchaseMessageComponent implements OnInit{
  @Input() promo: string;
  message: string;
  color: string;

  constructor(){
    this.promo = '';
    this.message = '';
    this.color = ';'
  }

  ngOnInit(): void {
    this.displayProperMessage(this.promo);
  }

  displayProperMessage(promo: string) {
    if (promo == "recent") {
      this.message = "vus récemment";
      this.color = "banner-color-1";
    } else if (promo == "promo") {
      this.message = "ventes promotionnelles";
      this.color = "banner-color-2";
    } else if (promo == "dispo") {
      this.message = "bons d'achats disponibles";
      this.color = "banner-color-1";
    }
    else {
      this.message = "bons d'achats les plus demandés";
      this.color = "banner-color-3";
    }
  }
}
