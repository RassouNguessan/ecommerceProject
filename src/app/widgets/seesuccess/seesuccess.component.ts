import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-seesuccess",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./seesuccess.component.html",
  styleUrl: "./seesuccess.component.scss",
})
export class SeesuccessComponent {
  options: AnimationOptions = {
    path: "/assets/animations/lotties/36107.json",
    loop: true,
    autoplay: true,
  };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
