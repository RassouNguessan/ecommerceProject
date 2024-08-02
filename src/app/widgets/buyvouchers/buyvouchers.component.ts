import { Component, Input } from "@angular/core";
import { LottieComponent } from "ngx-lottie";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { LottieBagComponent } from "../../widgets/lottie-bag/lottie-bag.component";
import { LottiesComponent } from "../lotties/lotties.component";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-buyvouchers",
  standalone: true,
  imports: [
    BackButtonComponent,
    LottieBagComponent,
    LottieComponent,
    LottiesComponent,
    BtnAddBasketComponent,
    CommonModule
  ],
  templateUrl: "./buyvouchers.component.html",
  styleUrl: "./buyvouchers.component.scss",
})
export class BuyvouchersComponent {
  @Input() imagePath: Record<string, unknown> = {};
  width: string;
  height: string;

  constructor() {
    this.imagePath = {
      path: "/assets/animations/ANIME-AAABBBB-2.json",
    };
    this.width = "464px";
    this.height = "463px";
  }
}
