import { Component } from "@angular/core";
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
  options: AnimationOptions = {
    path: "/assets/animations/lotties/security shield.json",
    loop: true,
    autoplay: true,
  };
  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
