import { Component } from '@angular/core';
import {AnimationOptions, LottieComponent } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
import { CommonModule } from '@angular/common';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';

@Component({
  selector: 'app-orderdetail-amount',
  standalone: true,
  imports: [BackbuttonComponent,LottieComponent,CommonModule],
  template:'  <app-backbutton/>',
  templateUrl: './orderdetail-amount.component.html',
  styleUrl: './orderdetail-amount.component.scss'
})
export class OrderdetailAmountComponent {


  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
      path: '/assets/lotties/125071.json',
      loop: true,
      autoplay: true
    }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }


  categories = [
    { id: 1,cannaux:' WHATSAPP',  montantBon: 2000000, montant: 5000000, frais: 5000,heure:'13:22',date:'01-01-2024', total: 5005000 }
  ];
}
