import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-lottiesucess",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lottiesucess.component.html",
  styleUrl: "./lottiesucess.component.scss",
})
export class LottiesucessComponent {
  options: AnimationOptions = {
    path: "/assets/animations/lotties/fab33b5a-a3f5-44e0-bb10-81fa29bfa048.json",
    loop: true,
    autoplay: true,
  };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
