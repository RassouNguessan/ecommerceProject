import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { StoreconcernsComponent } from "../../widgets/storeconcerns/storeconcerns.component";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-order",
  standalone: true,
  imports: [BackButtonComponent, StoreconcernsComponent, CommonModule, NumberWithSpacesPipe, RouterLink],
  templateUrl: "./order.component.html",
  styleUrl: "./order.component.scss",
})
export class OrderComponent {
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
}
