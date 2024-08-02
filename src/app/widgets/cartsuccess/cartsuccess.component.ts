import { Component } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cartsuccess",
  standalone: true,
  imports: [LottieComponent, RouterLink],
  templateUrl: "./cartsuccess.component.html",
  styleUrl: "./cartsuccess.component.scss",
})
export class CartsuccessComponent {
  options: AnimationOptions = {
    path: "/assets/animations/147919.json",
    loop: true,
    autoplay: true,
  };

  private animationItem: AnimationItem | undefined;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
