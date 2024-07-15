import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detailpayment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailpayment.component.html',
  styleUrls: ['./detailpayment.component.scss']
})
export class DetailpaymentComponent {

  // Déclaration et initialisation du tableau avec des valeurs en dur
  payments = [
    { id: 1, montant: 5000000, frais:5000,total:5005000},
  ];

}
