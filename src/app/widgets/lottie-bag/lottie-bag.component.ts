import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-lottie-bag",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lottie-bag.component.html",
  styleUrl: "./lottie-bag.component.scss",
})
export class LottieBagComponent {
  options: AnimationOptions = {
    path: "/assets/animations/ANIME-AAABBBB-2.json",
    loop: true,
    autoplay: true,
  };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
