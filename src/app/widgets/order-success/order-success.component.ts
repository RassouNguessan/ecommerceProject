import { Component, Input } from '@angular/core';
import { LottiesComponent } from "../lotties/lotties.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [LottiesComponent, CommonModule, RouterLink],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.scss'
})
export class OrderSuccessComponent {
  @Input() imagePath: Record<string, unknown> = {};
  width: string;
  height: string;

  constructor() {
    this.imagePath = {
      path: "/assets/animations/purchase.json",
    };
    this.width = "262px";
    this.height = "233px";
  }
}
