import { Component, Input } from "@angular/core";
import { LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-lotties",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lotties.component.html",
  styleUrl: "./lotties.component.scss",
})
export class LottiesComponent {
  @Input() imagePath: Record<string, unknown> = {};
  @Input() width = "";
  @Input() height = "";

  private animationItem: AnimationItem | undefined;

  // options: AnimationOptions = this.anotherOptions;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
