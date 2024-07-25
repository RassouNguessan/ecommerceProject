import { Component } from "@angular/core";
import { SecuritizationpayComponent } from "../securitizationpay/securitizationpay.component";
import { DetailpaymentComponent } from "../detailpayment/detailpayment.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BackButtonComponent } from "../back-button/back-button.component";

/*
interface GridItem {
  title: string;
  number: string;
  imageUrl: string;
  firstField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
  secondField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
  thirdField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
}
 */

@Component({
  selector: "app-payment",
  standalone: true,
  imports: [
    SecuritizationpayComponent,
    BackButtonComponent,
    DetailpaymentComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./payment.component.html",
  styleUrl: "./payment.component.scss",
})
export class PaymentComponent {
  detailsOpened = false;
  isAnimating = false;
  selectedGrid: number | null = null;

  toggleGrid(index: number) {
    this.selectedGrid = this.selectedGrid === index ? null : index;
  }

  toggleDetails(event: Event) {
    event.stopPropagation();

    if (this.detailsOpened) {
      this.isAnimating = true;
      setTimeout(() => {
        this.detailsOpened = false;
        this.isAnimating = false;
      }, 500);
    } else {
      this.detailsOpened = true;
    }
  }
}
