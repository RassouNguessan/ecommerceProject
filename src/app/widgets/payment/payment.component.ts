import { Component } from '@angular/core';
import { SecuritizationpayComponent } from '../securitizationpay/securitizationpay.component';
import { DetailpaymentComponent } from '../detailpayment/detailpayment.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../back-button/back-button.component';
import { GridItem } from '../../utils/types';


@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [SecuritizationpayComponent,
    BackButtonComponent,
    DetailpaymentComponent,
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})

export class PaymentComponent {

  grids: GridItem[] = [
    { title: 'Orange Money', number: '', imageUrl: './assets/images/orange_money.png' },
    { title: 'MTN Money', number: '', imageUrl: './assets/images/mtn_money.png' },
    { title: 'Airtel Money', number: '', imageUrl: './assets/images/wave.png' },
    { title: 'Moov money', number: '', imageUrl: './assets/images/moov.png' },

  ];
  selectedGrid: number | null = null;

  toggleGrid(index: number) {
    this.selectedGrid = this.selectedGrid === index ? null : index;
  }


  detailsOpened: boolean = false;
  isAnimating: boolean = false;
  phoneNumber: string = '';
  cvvNumber: string = '';
  expiryDate: string = '';
  expirationDate: string = '';

  toggleDetails(event: Event) {
    event.stopPropagation();

    if (this.detailsOpened) {
      this.isAnimating = true;
      setTimeout(() => {
        this.detailsOpened = false;
        this.isAnimating = false;
      }, 500);
    } else {
      this.detailsOpened = true;
    }
  }

}
