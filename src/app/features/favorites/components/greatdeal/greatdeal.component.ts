import { Component } from '@angular/core';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { StoreconcernsComponent } from '../../../home/components/storeconcerns/storeconcerns.component';
import { FavorisComponent } from '../../../favorites/components/favoris/favoris.component';
import { PaginationComponent } from '../../../home/components/pagination/pagination.component';
import { HeartComponent } from '../../../favorites/components/heart/heart.component';
import { FavoriteButtonComponent } from "../../../favorites/components/favorite-button/favorite-button.component";

@Component({
  selector: 'app-greatdeal',
  standalone: true,
  imports: [BackbuttonComponent, StoreconcernsComponent, FavorisComponent, PaginationComponent, HeartComponent, FavoriteButtonComponent],
  templateUrl: './greatdeal.component.html',
  styleUrl: './greatdeal.component.scss'
})
export class GreatdealComponent {

}
