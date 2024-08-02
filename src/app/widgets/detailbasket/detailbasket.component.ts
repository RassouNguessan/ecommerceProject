import { Component } from "@angular/core";
import { FavoriteButtonComponent } from "../../widgets/favorite-button/favorite-button.component";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { QuantityButtonComponent } from "../quantity-button/quantity-button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-detailbasket",
  standalone: true,
  imports: [
    FavoriteButtonComponent,
    DetailbasketComponent,
    BackButtonComponent,
    CommonModule,
    NumberWithSpacesPipe,
    QuantityButtonComponent,
    RouterLink,
  ],
  templateUrl: "./detailbasket.component.html",
  styleUrl: "./detailbasket.component.scss",
})
export class DetailbasketComponent {
  fees: number;
  amountTotal: number;
  quantity: number;

  infos = [
    {
      id: 1,
      number: 200,
      date: "20-05-2024",
      voucherNumber: 200,
      amount: 10000,
      imageURI: "/assets/images/10000@2x.png",
    },
    {
      id: 2,
      number: 100,
      date: "20-05-2024",
      voucherNumber: 100,
      amount: 30000,
      imageURI: "/assets/images/30000@2x.png",
    },
  ];

  constructor() {
    this.fees = 0;
    this.amountTotal = 0;
    this.quantity = 0;
    this.computeAmountTotal();
  }

  computeAmountTotal() {
    this.amountTotal = this.infos.reduce(
      (sum, card) => sum + (card.number * card.amount),
      0
    );
    this.fees = this.amountTotal / 1000
  }

  increment(id: number): void {
    const activeCard = this.infos.find((card) => card.id == id);
    if (activeCard) {
      activeCard["number"] += 1;
      this.computeAmountTotal();
    }
  }

  decrement(id: number): void {
    const activeCard = this.infos.find((card) => card.id == id);
    if (activeCard && activeCard.number > 1) {
      activeCard["number"] -= 1;
      this.computeAmountTotal();
    }
  }
}
