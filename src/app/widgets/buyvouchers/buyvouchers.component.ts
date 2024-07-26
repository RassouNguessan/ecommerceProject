import { Component, Input } from "@angular/core";
import { LottieComponent } from "ngx-lottie";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { LottieBagComponent } from "../../widgets/lottie-bag/lottie-bag.component";
import { LottiesComponent } from "../lotties/lotties.component";

@Component({
  selector: "app-buyvouchers",
  standalone: true,
  imports: [BackButtonComponent, LottieBagComponent, LottieComponent, LottiesComponent],
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
    this.width = "500px";
    this.height = "500px";
  }
}
