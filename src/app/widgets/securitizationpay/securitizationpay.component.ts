import { Component, Input } from "@angular/core";
import { LottiesComponent } from "../../widgets/lotties/lotties.component";

@Component({
  selector: "app-securitizationpay",
  standalone: true,
  imports: [LottiesComponent],
  templateUrl: "./securitizationpay.component.html",
  styleUrl: "./securitizationpay.component.scss",
})
export class SecuritizationpayComponent {
   @Input() imagePath: Record<string, unknown> = {};
  width: string;
  height: string;

  constructor() {
    this.imagePath = {
      path: "/assets/animations/shield.json",
    };
    this.width = "125px";
    this.height = "125px";
  }
}
