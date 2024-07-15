import { Component, Input } from "@angular/core";
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";
import { Interface } from "readline";


@Component({
  selector: "app-lotties",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./lotties.component.html",
  styleUrl: "./lotties.component.scss",
})
export class LottiesComponent {
  @Input() anotherOptions: Object = {};
  @Input() width: string = '';
  @Input() height: string = '';

  private animationItem: AnimationItem | undefined;

  // options: AnimationOptions = this.anotherOptions;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
