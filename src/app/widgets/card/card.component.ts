import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CardService } from "../../services/card.service";
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { CommonModule } from "@angular/common";
import { Card } from "../../utils/types";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { StarRatingComponent } from "../star-rating/star-rating.component";

@Component({
  selector: "app-card",
  standalone: true,
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
  imports: [BtnAddBasketComponent, CommonModule, RouterLink, NumberWithSpacesPipe, StarRatingComponent],
})
export class CardComponent implements OnInit {
  @Input() promo: boolean;

  cardList: Card[] | undefined;

  constructor(
    private router: Router,
    private cardService: CardService
  ) {
    this.promo = false;
  }

  ngOnInit(): void {
    this.cardList = this.cardService.getCardList();
  }

  // Fonction pour alterner la couleur du favorite
  toggleColor(id: number | undefined) {
    if (id !== undefined && this.cardList) {
      const card = this.cardList.find((card) => card.id === id);
      if (card) {
        card.favorite = !card.favorite;
      }
    }
  }

  createArray(length: number): number[] {
    return new Array(length).fill(0).map((_, i) => i);
  }

  // Fonction pour gerer la couleur des étoiles au click

  //fonction pour afficher les details d'une carte cliquée

  navigateToDetail(cardId: number | undefined) {
    this.router.navigate(["/voucher/", cardId]);
  }
}
