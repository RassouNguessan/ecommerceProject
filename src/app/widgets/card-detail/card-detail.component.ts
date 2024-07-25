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
  ],
  templateUrl: "./card-detail.component.html",
  styleUrl: "./card-detail.component.scss",
})
export class CardDetailComponent implements OnInit {
  cardList: Card | undefined;
  carddetail: Card | undefined = CARDS[0];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceCard: CardService
  ) {}

  ngOnInit(): void {
    const cardId: string | null = this.route.snapshot.paramMap.get("id");
    if (cardId) {
      this.carddetail = this.serviceCard.getCardById(+cardId);
    }
  }

  navigateToDetail(cardId: number) {
    this.router.navigate(["/detail", cardId]);
  }
}
