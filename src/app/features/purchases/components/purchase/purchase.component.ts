import { Component } from '@angular/core';
import { Bannier1Component } from './bannier-1/bannier-1.component';
import { PurchasePromoComponent } from './purchase-promo/purchase-promo.component';
import { CardComponent } from "./card/card.component";
import { Bannier2Component } from "./bannier-2/bannier-2.component";
import { PurchaseAvailableComponent } from "./purchase-available/purchase-available.component";
import { Bannier3Component } from "./bannier-3/bannier-3.component";
import { PurchaseMostComponent } from "./purchase-most/purchase-most.component";
import { Bannier4Component } from "./bannier-4/bannier-4.component";
import { PurchaseRecentViewComponent } from "./purchase-recent-view/purchase-recent-view.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
@Component({
    selector: 'app-purchase',
    standalone: true,
    templateUrl: './purchase.component.html',
    styleUrl: './purchase.component.scss',
    imports: [Bannier1Component, PurchasePromoComponent, CardComponent, Bannier2Component, PurchaseAvailableComponent, Bannier3Component, PurchaseMostComponent, Bannier4Component, PurchaseRecentViewComponent, FooterComponent]
})
export class PurchaseComponent {

}
