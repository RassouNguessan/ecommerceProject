import { Component } from '@angular/core';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { LottieBagComponent } from '../../../../shared/animations/lottie-bag/lottie-bag.component';


@Component({
  selector: 'app-distributeinduvidual',
  standalone: true,
  imports: [BackbuttonComponent,LottieBagComponent],
  template:'<app-backbutton/>,<app-lottie-bag/>',
  templateUrl: './distributeinduvidual.component.html',
  styleUrl: './distributeinduvidual.component.scss',
})
export class DistributeinduvidualComponent {


}
