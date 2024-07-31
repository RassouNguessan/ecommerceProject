import { Component } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { StoreconcernsComponent } from "../../widgets/storeconcerns/storeconcerns.component";
import { FavorisComponent } from "../../widgets/favoris/favoris.component";
import { PaginationComponent } from "../../widgets/pagination/pagination.component";
import { HeartComponent } from "../../widgets/heart/heart.component";
import { FavoriteButtonComponent } from "../../widgets/favorite-button/favorite-button.component";
import { CommonModule } from "@angular/common";
import { voucherDetail } from "../../utils/types";
import { Router } from "@angular/router";
import { FAVORITES } from "../../utils/mock-products-list";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { QuantityButtonComponent } from "../quantity-button/quantity-button.component";
import { TotalPriceCardComponent } from "../total-price-card/total-price-card.component";
import { StarRatingComponent } from "../star-rating/star-rating.component";

@Component({
  selector: "app-greatdeal",
  standalone: true,
  imports: [
    BackButtonComponent,
    StoreconcernsComponent,
    FavorisComponent,
    PaginationComponent,
    HeartComponent,
    CommonModule,
    FavoriteButtonComponent,
    NumberWithSpacesPipe,
    BtnAddBasketComponent,
    QuantityButtonComponent,
    TotalPriceCardComponent,
    StarRatingComponent
],
  templateUrl: "./greatdeal.component.html",
  styleUrl: "./greatdeal.component.scss",
})
export class GreatdealComponent {
  favoriteProducts: voucherDetail[] = FAVORITES;
  firstProduct: voucherDetail;

  constructor(private router: Router) {
    this.firstProduct = this.favoriteProducts[0];
  }

  groupDistribued() {
    this.router.navigate(["/distributed"]);
  }

  updateInfo(product: voucherDetail) {
    this.firstProduct = product;
  }
}
