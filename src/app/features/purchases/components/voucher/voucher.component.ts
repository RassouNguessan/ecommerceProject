import { Component } from '@angular/core';
import {AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';


@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [LottieComponent,BackbuttonComponent],
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.scss'
})
export class VoucherComponent {

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
      path: '/assets/lotties/ANIME -AAABBBB-2 (1).json',
      loop: true,
      autoplay: true
    }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

}
