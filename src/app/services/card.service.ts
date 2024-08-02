import { Injectable } from "@angular/core";
import { CARDS, ORDERS, PROMOS } from "../utils/mock-card-list";
import { Card, purchasedVoucher } from "../utils/types";

@Injectable({
  providedIn: "root",
})
export class CardService {
  getCardList(): Card[] {
    return CARDS;
  }

  getPromoCardList(): Card[] {
    return PROMOS;
  }

  getPurchasedCardList(): purchasedVoucher[] {
    return ORDERS;
  }

  getCardById(cardId: number): Card | undefined {
    const currentCardId = CARDS.find((card) => card.id === cardId);

    if (!currentCardId) {
      return undefined; // ou vous pouvez gérer ce cas comme vous le souhaitez
    }

    return currentCardId;
  }
}
