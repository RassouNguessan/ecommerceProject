import { Component, Input, OnInit } from "@angular/core";
import { QuantityButtonComponent } from "../quantity-button/quantity-button.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";

@Component({
  selector: "app-total-price-card",
  standalone: true,
  imports: [QuantityButtonComponent, NumberWithSpacesPipe, BtnAddBasketComponent],
  templateUrl: "./total-price-card.component.html",
  styleUrl: "./total-price-card.component.scss",
})
export class TotalPriceCardComponent implements OnInit {
  @Input() price: number;
  result: number;

  constructor(){
    this.price = 0;
    this.result = 0;
  }

  ngOnInit(): void {
    this.result = this.price;
  }

  totalCost(val: number){
    this.result = val;
    console.log("it's works", this.result);
  }
}
