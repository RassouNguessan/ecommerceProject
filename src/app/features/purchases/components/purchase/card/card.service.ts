import { Injectable } from "@angular/core";
import { Card } from "./card";
import { CARDS } from "./mock-card-list";

@Injectable({
    providedIn: 'root'
  })
  export class CardService {

    constructor(){

    }
    getCardList(): Card[]{
        return CARDS;
    }





    getCardById(cardId:number | undefined):Card |undefined{
      let currentCardId = CARDS.find(card => card.id == cardId) ? CARDS.find(card => card.id == cardId) : undefined 
     
      console.log(currentCardId,"l'id de la card en current");
      
      return CARDS.find(card => card.id == cardId)
    }
  }