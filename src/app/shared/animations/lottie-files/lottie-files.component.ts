import { Component, Input } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-lottie-files",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lottie-files.component.html",
  styleUrl: "./lottie-files.component.scss",
})
export class LottieFilesComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: "/assets/animations/lotties/security shield.json",
    loop: true,
    autoplay: true,
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
