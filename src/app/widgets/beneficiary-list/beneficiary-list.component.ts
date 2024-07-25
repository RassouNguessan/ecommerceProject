import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
  selector: "app-beneficiary-list",
  standalone: true,
  imports: [LottieComponent, BackButtonComponent],
  templateUrl: "./beneficiary-list.component.html",
  styleUrl: "./beneficiary-list.component.scss",
})
export class BeneficiaryListComponent {
  options: AnimationOptions = {
    path: "/assets/lotties/ANIME -AAABBBB-2 (1).json",
    loop: true,
    autoplay: true,
  };
  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
