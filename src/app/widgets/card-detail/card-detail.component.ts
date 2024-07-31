import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { Router, RouterLink } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../../services/card.service";
import { FooterComponent } from "../footer/footer.component";
import { BackButtonComponent } from "../back-button/back-button.component";
import { AddToCartComponent } from "../add-to-cart/add-to-cart.component";
import { TotalPriceCardComponent } from "../total-price-card/total-price-card.component";
import { QuantityButtonComponent } from "../quantity-button/quantity-button.component";
import { Card } from "../../utils/types";
import { CARDS } from "../../utils/mock-card-list";
import { Banner3Component } from "../banner-3/banner-3.component";
import { StarRatingComponent } from "../star-rating/star-rating.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { HeartComponent } from "../heart/heart.component";

@Component({
  selector: "app-card-detail",
  standalone: true,
  imports: [
    CommonModule,
    BackButtonComponent,
    FooterComponent,
    Banner3Component,
    PurchaseRecentViewComponent,
    CardComponent,
    AddToCartComponent,
    QuantityButtonComponent,
    BtnAddBasketComponent,
    TotalPriceCardComponent,
    RouterLink,
    StarRatingComponent,
    NumberWithSpacesPipe,
    HeartComponent,
  ],
  templateUrl: "./card-detail.component.html",
  styleUrl: "./card-detail.component.scss",
})
export class CardDetailComponent implements OnInit {
  cardList: Card[] = CARDS;
  cardDetail: Card | undefined;
  orderQty: number;
  amountTotal: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceCard: CardService
  ) {
    this.cardDetail = CARDS[0];
    this.orderQty = 1;
    this.amountTotal = 0;
  }

  ngOnInit(): void {
    const cardId: string[] = this.route.snapshot.paramMap.getAll("id");
    if (cardId) {
      this.cardDetail = this.serviceCard.getCardById(parseInt(cardId[0]));
      this.amountTotal = this.cardDetail?.price;
    }
  }

  navigateToDetail(cardId: number) {
    this.router.navigate(["/detail", cardId]);
  }

  computeAmountTotal(qty: number) {
    if (this.cardDetail?.price !== undefined) {
      this.amountTotal = qty * this.cardDetail.price;
    }
  }

  increment(): void {
    this.orderQty++;
    this.computeAmountTotal(this.orderQty);
  }

  decrement(): void {
    if (this.orderQty > 1) {
      this.orderQty--;
      this.computeAmountTotal(this.orderQty);
    }
  }
}
