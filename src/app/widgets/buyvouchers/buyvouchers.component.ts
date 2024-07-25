import { Component } from "@angular/core";
import { LottieComponent } from "ngx-lottie";
import { BackButtonComponent } from "../back-button/back-button.component";
import { LottieBagComponent } from "../lottie-bag/lottie-bag.component";

@Component({
  selector: "app-buyvouchers",
  standalone: true,
  imports: [BackButtonComponent, LottieBagComponent, LottieComponent],
  templateUrl: "./buyvouchers.component.html",
  styleUrl: "./buyvouchers.component.scss",
})
export class BuyvouchersComponent {}
