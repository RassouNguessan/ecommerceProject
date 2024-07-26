import { Component, Input } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { LottieBagComponent } from "../../widgets/lottie-bag/lottie-bag.component";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { LottiesComponent } from "../lotties/lotties.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";

@Component({
  selector: "app-distributed",
  standalone: true,
  imports: [BackButtonComponent, LottieBagComponent, RouterLink, LottiesComponent, SecMsgComponent],
  templateUrl: "./distributed.component.html",
  styleUrl: "./distributed.component.scss",
})
export class DistributedComponent {
  @Input() imagePath: Record<string, unknown> = {};
  width: string;
  height: string;

  constructor(private router: Router) {
    this.imagePath = {
      path: "/assets/animations/ANIME-AAABBBB-2.json",
    };
    this.width = "500px";
    this.height = "500px";
  }

  TonextBenefic() {
    this.router.navigate(["./beneficiary-list"]);
  }
}
