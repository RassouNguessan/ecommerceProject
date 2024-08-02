import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "../back-button/back-button.component";
import { StoreconcernsComponent } from "../storeconcerns/storeconcerns.component";
import { HorizontalCardComponent } from "../horizontal-card/horizontal-card.component";
import { Banner4Component } from "../banner-4/banner-4.component";
import { PurchaseRecentViewComponent } from "../purchase-recent-view/purchase-recent-view.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
// import { purchasedVoucher } from "../../utils/types";
// import { CardService } from "../../services/card.service";
// import { ORDERS } from "../../utils/mock-card-list";

@Component({
  selector: "app-detailorder",
  standalone: true,
  imports: [
    StoreconcernsComponent,
    BackButtonComponent,
    CommonModule,
    HorizontalCardComponent,
    Banner4Component,
    PurchaseRecentViewComponent,
    CardComponent,
    FooterComponent,
    NumberWithSpacesPipe,
  ],
  templateUrl: "./detailorder.component.html",
  styleUrl: "./detailorder.component.scss",
})
export class DetailorderComponent {
  // voucherId: number;
  // details: purchasedVoucher;

  details = [
    {
      id: 1,
      reference: "CO-GS-00001",
      hour: "13:20",
      date: "20-05-2024",
      amountTotal: 5005000,
      state: "Livrée",
      infos: [
        {
          number: 200,
          date: "20-05-2024",
          voucherNumber: 200,
          amount: 10000,
          imageURI: "/assets/images/10000@2x.png",
        },
        {
          number: 100,
          date: "20-05-2024",
          voucherNumber: 100,
          amount: 30000,
          imageURI: "/assets/images/30000@2x.png",
        },
      ],
    },
  ];

  // constructor(
  //   private location: Location,
  //   private cardService: CardService
  // ) {
  //   this.voucherId = 1;
  //   this.details = 
  //     {
  //       id: 1,
  //       reference: "CO-GS-00001",
  //       hour: "13:20",
  //       date: "20-05-2024",
  //       amount_total: 5005000,
  //       infos: [
  //         {
  //           number: 200,
  //           date: "",
  //           voucherNumber: 200,
  //           amount: 10000,
  //           imageURI: "/assets/iamges/10000@2x.png",
  //         },
  //         {
  //           number: 100,
  //           date: "",
  //           voucherNumber: 100,
  //           amount: 30000,
  //           imageURI: "/assets/iamges/30000@2x.png",
  //         },
  //       ],
  //     }
  // }

  // ngOnInit(): void {
  //   // const DATA = this.location.getState() as Record<string, string>;
  //   // this.checkPurchased(parseInt(DATA?.["voucherId"]));
  //   this.details = this.cardService.getPurchasedCardList();
  //   console.log(this.details);
  // }

  // checkPurchased(voucherId: number) {
  //   this.details = this.cardService
  //     .getPurchasedCardList()
  //     .filter(card => card.id === voucherId);
  // }

  
}
