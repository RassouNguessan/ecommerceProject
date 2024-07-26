import { Component } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { StoreconcernsComponent } from "../../widgets/storeconcerns/storeconcerns.component";
import { FavorisComponent } from "../../widgets/favoris/favoris.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
import { HeartComponent } from "../../widgets/heart/heart.component";
import { FavoriteButtonComponent } from "../../widgets/favorite-button/favorite-button.component";

@Component({
  selector: "app-greatdeal",
  standalone: true,
  imports: [
    BackButtonComponent,
    StoreconcernsComponent,
    FavorisComponent,
    PaginationComponent,
    HeartComponent,
    FavoriteButtonComponent,
  ],
  templateUrl: "./greatdeal.component.html",
  styleUrl: "./greatdeal.component.scss",
})
export class GreatdealComponent {}
