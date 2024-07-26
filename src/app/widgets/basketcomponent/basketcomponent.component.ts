import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-basketcomponent',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './basketcomponent.component.html',
  styleUrls: ['./basketcomponent.component.scss'],
})
export class BasketComponent {
  @Input() data: string;
  carts = [
    { 
      id: 1,
      references: ' CO-GS-00001',
      heure: '13:22',
      date: '01-01-2024',
      total: 5005000 
    }
  ];

  constructor(private router: Router) {
    this.data = '';
  }

  OrderDetails() {
    this.router.navigate(['/order']);
  }

};