import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions, LottieComponent } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: 'app-lottie-validate',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './lottie-validate.component.html',
  styleUrl: './lottie-validate.component.scss'
})
export class LottieValidateComponent {
  @Input() anotherOptions: Object = {};

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = this.anotherOptions;

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
