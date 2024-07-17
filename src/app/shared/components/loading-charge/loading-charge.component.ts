import { Component } from '@angular/core';
import {AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';



@Component({
  selector: 'app-loading-charge',
  standalone: true,
  imports: [LottieComponent,],
  templateUrl: './loading-charge.component.html',
  styleUrl: './loading-charge.component.scss'
})
export class LoadingChargeComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
      path: '/assets/animations/lotties/927.json',
      loop: true,
      autoplay: true
    }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

}
