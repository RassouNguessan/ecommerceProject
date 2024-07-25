import { Component } from "@angular/core";
import { HeartComponent } from "../heart/heart.component";
import { FavoriteButtonComponent } from "../favorite-button/favorite-button.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { StoreconcernsComponent } from "../storeconcerns/storeconcerns.component";
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: "app-greatdeal",
  standalone: true,
  imports: [
    BackButtonComponent,
    StoreconcernsComponent,
    PaginationComponent,
    HeartComponent,
    FavoriteButtonComponent,
  ],
  templateUrl: "./greatdeal.component.html",
  styleUrl: "./greatdeal.component.scss",
})
export class GreatdealComponent {}
