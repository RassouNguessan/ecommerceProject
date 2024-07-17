import { Component } from '@angular/core';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { LottieBagComponent } from '../../../../shared/animations/lottie-bag/lottie-bag.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-distributed',
  standalone: true,
  imports: [BackbuttonComponent,LottieBagComponent, RouterLink],
  template:'<app-backbutton/>',
  templateUrl: './distributed.component.html',
  styleUrl: './distributed.component.scss'
})
export class DistributedComponent {

  constructor(private router: Router){

  }

  TonextBenefic(){
    this.router.navigate(['./beneficiary-list']);


  }

}
