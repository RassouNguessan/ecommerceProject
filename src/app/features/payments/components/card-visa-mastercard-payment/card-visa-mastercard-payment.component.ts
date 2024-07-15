import { CommonModule } from '@angular/common';
import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface GridItem {
  title: string;
  number: string;
  cvv: string;
  expiration: string;
  imageUrl: string;

}

@Component({
  selector: 'app-card-visa-mastercard-payment',
  standalone: true,
  imports: [FormsModule,
            CommonModule,
  ],
  templateUrl: './card-visa-mastercard-payment.component.html',
  styleUrl: './card-visa-mastercard-payment.component.scss'
})
export class CardVisaMastercardPaymentComponent{

  selectedGrid: number | null = null;
  detailsOpened: boolean = false;
  isAnimating: boolean = false;
  phoneNumber: string = '';
  cvvNumber: string = '';
  expiryDate: string = '';
  expirationDate: string = '';


  customMastercardImageUrl: string = './assets/images/orange_money.png';
  grids: GridItem[] = [
 
    { title: 'Visa / Mastercard', cvv: '',expiration:'', number: '', imageUrl: './assets/images/visa_money.png' }
  ];

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
  
  toggleGrid(index: number): void {
    if (this.selectedGrid === index) {
      this.selectedGrid = null;
    } else {
      this.selectedGrid = index;
    }
  }
  






}
export default CardVisaMastercardPaymentComponent