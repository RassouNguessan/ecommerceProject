import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CardService } from './card.service';
import { Card } from './card';
import { BtnAddBasketComponent } from "../btn-add-basket/btn-add-basket.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [BtnAddBasketComponent,CommonModule,RouterLink]
    
})
export class CardComponent implements OnInit {

  cardList: Card[] | undefined;
  constructor(private router: Router,
    private cardService: CardService
  ){}

  @Input() promo: boolean = false;
  
  ngOnInit(): void {
    this.cardList = this.cardService.getCardList();
  }

  // Fonction pour alterner la couleur du like
  toggleColor(id: number | undefined) {
    if (id !== undefined && this.cardList) {
      const card = this.cardList.find(card => card.id === id);
      if (card) {
        card.like = !card.like;
      }
    }
  }
  createArray(length: number): number[] {
    return new Array(length).fill(0).map((_, i) => i);
  }
  // Fonction pour gerer la couleur des étoiles au click

  //fonction pour afficher les details d'une carte cliquée


  navigateToDetail(cardId: number |undefined) {
    this.router.navigate(['/detail', cardId]);
  }
  
}
