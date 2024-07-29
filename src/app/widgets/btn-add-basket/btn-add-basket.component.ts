import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-btn-add-basket",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./btn-add-basket.component.html",
  styleUrl: "./btn-add-basket.component.scss",
})
export class BtnAddBasketComponent {
  @Input() componentClass?: string;

  constructor(){
    this.componentClass = '';
  }
}
