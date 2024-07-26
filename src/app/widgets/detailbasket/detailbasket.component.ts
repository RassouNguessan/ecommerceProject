import { Component } from '@angular/core';
import { FavoriteButtonComponent } from '../../widgets/favorite-button/favorite-button.component';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";

@Component({
  selector: 'app-detailbasket',
  standalone: true,
  imports: [FavoriteButtonComponent, DetailbasketComponent, BackButtonComponent,CommonModule],
  templateUrl: './detailbasket.component.html',
  styleUrl: './detailbasket.component.scss'
})
export class DetailbasketComponent {

  details = [
    { id: 1, panier: 'DÉTAILS DU PANIER', 
      montantBon1:' 2 000 000',
      bon1: '200',
      pay1:'10 000',
      bon2: '100',
      pay2:'30 000',
       montantBon2: '5 000 000',
       frais: '5000',
       heure: '13:22', date: 
       '01-01-2024', total:' 5 005 000' }
  ];

}
