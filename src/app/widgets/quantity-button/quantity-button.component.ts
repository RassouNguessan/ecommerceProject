import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";

@Component({
  selector: "app-quantity-button",
  standalone: true,
  imports: [BtnAddBasketComponent],
  templateUrl: "./quantity-button.component.html",
  styleUrl: "./quantity-button.component.scss",
})
export class QuantityButtonComponent {
  @Input() price: number;
  @Output() totalCost: EventEmitter<number>;
  quantity: number;

  constructor(){
    this.price = 0;
    this.quantity = 1;
    this.totalCost = new EventEmitter();
  }

  get totalPrice(): number {
    return this.price * this.quantity;
  }

  increment(): void {
    this.quantity++;
    this.totalCost.emit(this.price * this.quantity);
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.totalCost.emit(this.price * this.quantity);
    }
  }
}
