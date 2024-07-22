import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackbuttonComponent } from '../../../../../shared/components/backbutton/backbutton.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { Bannier3Component } from '../bannier-3/bannier-3.component';
import { PurchaseRecentViewComponent } from '../purchase-recent-view/purchase-recent-view.component';
import { CardComponent } from '../card/card.component';
import { AddCartButtonComponent } from '../../../../../shared/components/add-cart-button/add-cart-button.component';
import { QuantityButtonComponent } from '../../../../../shared/components/quantity-button/quantity-button.component';
import { BtnAddBasketComponent } from '../btn-add-basket/btn-add-basket.component';
import { TotalPriceCardComponent } from '../../../../../shared/components/total-price-card/total-price-card.component';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card/card.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule ,
            BackbuttonComponent,
            FooterComponent, 
            Bannier3Component,
            PurchaseRecentViewComponent,
            CardComponent,
            AddCartButtonComponent,
            QuantityButtonComponent,
            BtnAddBasketComponent,
            TotalPriceCardComponent,
            RouterLink
            




          ],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent  implements OnInit {

cardList :Card |undefined
carddetail:Card|undefined

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private serviceCard:CardService,
  )
  {}
ngOnInit(): void {
  const cardId: string | null = this.route.snapshot.paramMap.get('id')
  if(cardId){
    this.carddetail = this.serviceCard.getCardById(+cardId)
  }  
  
}
navigateToDetail(cardId: number) {
  this.router.navigate(['/detail', cardId]);
}


}


















