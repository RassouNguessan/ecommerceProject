import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: "app-cartsuccess",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./cartsuccess.component.html",
  styleUrl: "./cartsuccess.component.scss",
})
export class CartsuccessComponent {
  options: AnimationOptions = {
    path: "/assets/animations/lotties/147919.json",
    loop: true,
    autoplay: true,
  };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
