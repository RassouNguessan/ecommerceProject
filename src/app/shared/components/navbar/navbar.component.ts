import { CommonModule } from '@angular/common';
import { Component,ViewChild ,ElementRef} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router:Router){

  }
  greatDeal() {
    this.router.navigate(['/greatedeal'])
  }
  purchaseAvailable() {
    this.router.navigate(['/purchaseavailable'])
    }
      
    zoomIn() {
      console.log('Mouse over - Zoom In');
      // Ajoutez ici des actions supplémentaires si nécessaire
    }
  
    zoomOut() {
      console.log('Mouse leave - Zoom Out');
      // Ajoutez ici des actions supplémentaires si nécessaire
    }




   
    
}
