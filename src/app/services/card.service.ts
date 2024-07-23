import { Injectable } from "@angular/core";
import { CARDS } from "../utils/mock-card-list";
import { Card } from "../utils/types";

@Injectable({
  providedIn: "root",
})
export class CardService {
  getCardList(): Card[] {
    return CARDS;
  }

  getCardById(cardId: number | undefined): Card | undefined {
    const currentCardId = CARDS.find((card) => card.id == cardId)
      ? CARDS.find((card) => card.id == cardId)
      : undefined;

    console.log(currentCardId, "l'id de la card en current");

    return CARDS.find((card) => card.id == cardId);
  }
}
