import { Component } from "@angular/core";
import { LottiesucessComponent } from "../lottiesucess/lottiesucess.component";

@Component({
  selector: "app-order-success",
  standalone: true,
  imports: [LottiesucessComponent],
  templateUrl: "./order-success.component.html",
  styleUrl: "./order-success.component.scss",
})
export class OrderSuccessComponent {}
