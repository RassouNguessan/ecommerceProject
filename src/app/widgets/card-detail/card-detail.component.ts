import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Bannier3Component } from "../bannier-3/bannier-3.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { Router, RouterLink } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { CardService } from "../../services/card.service";
import { FooterComponent } from "../footer/footer.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { AddCartButtonComponent } from "../add-cart-button/add-cart-button.component";
import { TotalPriceCardComponent } from "../total-price-card/total-price-card.component";
import { QuantityButtonComponent } from "../quantity-button/quantity-button.component";
import { Card } from "../../utils/types";
import { CARDS } from "../../utils/mock-card-list";

@Component({
  selector: "app-card-detail",
  standalone: true,
  imports: [
    CommonModule,
    BackbuttonComponent,
    FooterComponent,
    Bannier3Component,
    PurchaseRecentViewComponent,
    CardComponent,
    AddCartButtonComponent,
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
