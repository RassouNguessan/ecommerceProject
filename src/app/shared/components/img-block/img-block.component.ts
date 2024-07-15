import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
  selector: 'app-img-block',
  standalone: true,
  imports: [NgOptimizedImage, PaymentMethodComponent],
  templateUrl: './img-block.component.html',
  styleUrl: './img-block.component.scss'
})
export class ImgBlockComponent {
  imageURI ?: string;

  constructor() {
    this.imageURI = './assets/images/Groupe 16336@2x.png'
  }

}
