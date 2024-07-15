import { Component } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { LottieBagComponent } from '../../../../shared/animations/lottie-bag/lottie-bag.component';

@Component({
  selector: 'app-buyvouchers',
  standalone: true,
  imports: [BackbuttonComponent,LottieBagComponent,LottieComponent],
  templateUrl: './buyvouchers.component.html',
  styleUrl: './buyvouchers.component.scss'
})
export class BuyvouchersComponent {

}
