import { Component } from "@angular/core";
import { HeartComponent } from "../heart/heart.component";
import { FavoriteButtonComponent } from "../favorite-button/favorite-button.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { StoreconcernsComponent } from "../storeconcerns/storeconcerns.component";
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
  selector: "app-greatdeal",
  standalone: true,
  imports: [
    BackbuttonComponent,
    StoreconcernsComponent,
    PaginationComponent,
    HeartComponent,
    FavoriteButtonComponent,
  ],
  templateUrl: "./greatdeal.component.html",
  styleUrl: "./greatdeal.component.scss",
})
export class GreatdealComponent {}
