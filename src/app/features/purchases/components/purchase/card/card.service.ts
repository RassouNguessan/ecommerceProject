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
  }