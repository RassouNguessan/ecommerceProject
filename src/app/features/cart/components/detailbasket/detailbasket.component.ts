import { Component } from '@angular/core';
import { FavoriteButtonComponent } from '../features/favorites/components/favorite-button/favorite-button.component';
import { BackbuttonComponent } from '../backbutton/backbutton.component';

@Component({
  selector: 'app-detailbasket',
  standalone: true,
  imports: [FavoriteButtonComponent, DetailbasketComponent, BackbuttonComponent],
  templateUrl: './detailbasket.component.html',
  template: ' <app-favorite-button/>',
  styleUrl: './detailbasket.component.scss'
})
export class DetailbasketComponent {

  details = [
    { id: 1, panier: 'DÉTAIL DE LA COMMANDE ( CO-GS-00000 )', montantBon: 2000000, montant: 5000000, frais: 5000, heure: '13:22', date: '01-01-2024', total: 5005000 }
  ];

}
