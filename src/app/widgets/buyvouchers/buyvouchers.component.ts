import { Component } from "@angular/core";
import { LottieComponent } from "ngx-lottie";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { LottieBagComponent } from "../lottie-bag/lottie-bag.component";

@Component({
  selector: "app-buyvouchers",
  standalone: true,
  imports: [BackbuttonComponent, LottieBagComponent, LottieComponent],
  templateUrl: "./buyvouchers.component.html",
  styleUrl: "./buyvouchers.component.scss",
})
export class BuyvouchersComponent {}
