import { Component, Input } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-lottie-validate",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lottie-validate.component.html",
  styleUrl: "./lottie-validate.component.scss",
})
export class LottieValidateComponent {
  @Input() imagePath: Record<string, unknown> = {};
  options: AnimationOptions;
  private animationItem: AnimationItem | undefined;

  constructor() {
    this.options = this.imagePath;
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
