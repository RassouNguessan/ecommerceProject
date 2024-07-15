import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { StoreconcernsComponent } from '../../../home/components/storeconcerns/storeconcerns.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [BackbuttonComponent,StoreconcernsComponent,CommonModule],
  templateUrl: './order.component.html',
  template:'<app-storeconcerns/>',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  details = [
    { id: 1,commandesa:'DÉTAIL DE LA COMMANDE ( CO-GS-000010 )',  montantBon: 2000000, montant: 5000000, frais: 5000,heure:'13:22',date:'01-01-2024', total: 5005000 }
  ];
  
}
