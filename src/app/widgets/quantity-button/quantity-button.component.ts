import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quantity-button",
  standalone: true,
  imports: [],
  templateUrl: "./quantity-button.component.html",
  styleUrl: "./quantity-button.component.scss",
})
export class QuantityButtonComponent {
  @Input() price = 0;
  quantity = 1;

  get totalPrice(): number {
    return this.price * this.quantity;
  }

  increment(): void {
    this.quantity++;
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
