import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { PurchasePromoComponent } from "../../../purchases/components/purchase/purchase-promo/purchase-promo.component";
import { CardComponent } from "../../../purchases/components/purchase/card/card.component";
import { PurchaseRecentViewComponent } from "../../../purchases/components/purchase/purchase-recent-view/purchase-recent-view.component";
import { Bannier3Component } from "../../../purchases/components/purchase/bannier-3/bannier-3.component";

@Component({
    selector: 'app-promos',
    standalone: true,
    templateUrl: './promos.component.html',
    styleUrl: './promos.component.scss',
    imports: [FooterComponent, PurchasePromoComponent, CardComponent, PurchaseRecentViewComponent, Bannier3Component]
})
export class PromosComponent {

}
