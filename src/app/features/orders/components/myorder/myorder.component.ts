import { Component, NgModule } from '@angular/core';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { BasketComponent } from '../../../cart/components/basketcomponent/basketcomponent.component';
import { CommonModule } from '@angular/common';
import { Bannier4Component } from "../../../purchases/components/purchase/bannier-4/bannier-4.component";
import { PurchaseRecentViewComponent } from "../../../purchases/components/purchase/purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../../../purchases/components/purchase/card/card.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-favorites',
    standalone: true,
    templateUrl: './myorder.component.html',
    template: '    <app-backbutton/><app-basketcomponent/>',
    styleUrl: './myorder.component.scss',
    imports: [BackbuttonComponent, BasketComponent, CommonModule, Bannier4Component, PurchaseRecentViewComponent, CardComponent, FooterComponent]
})

export class MyorderComponent {

  basketData = ['Data 1', 'Data 2', 'Data 3','']; // Ajoutez autant de données que nécessaire


}

