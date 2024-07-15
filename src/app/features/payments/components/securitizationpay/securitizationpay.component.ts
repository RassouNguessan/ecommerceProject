import { Component, Input } from "@angular/core";
import { LottiesComponent } from "../../../../shared/components/lotties/lotties.component";

@Component({
  selector: "app-securitizationpay",
  standalone: true,
  imports: [LottiesComponent],
  templateUrl: "./securitizationpay.component.html",
  styleUrl: "./securitizationpay.component.scss",
})
export class SecuritizationpayComponent {
  @Input() sendOptions: Object = {};
  width: string;
  height: string;

  constructor() {
    this.sendOptions = {
      path: "/assets/animations/lotties/security shield.json",
    };
    this.width = "125px";
    this.height = "125px";
  }
}
