import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DetailpaymentComponent } from "../detailpayment/detailpayment.component";
import { SecuritizationpayComponent } from "../securitizationpay/securitizationpay.component";
import CardVisaMastercardPaymentComponent from "../card-visa-mastercard-payment/card-visa-mastercard-payment.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";

interface GridItem {
  title: string;
  number: string;
  imageUrl: string;
  firstField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
  secondField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
  thirdField?: string; // Ajoutez cette ligne si vous avez besoin de cette propriété
}

@Component({
  selector: "app-means-payment",
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DetailpaymentComponent,
    BackbuttonComponent,
    SecuritizationpayComponent,
    CardVisaMastercardPaymentComponent,
  ],
  templateUrl: "./means-payment.component.html",
  styleUrl: "./means-payment.component.scss",
})
export class MeansPaymentComponent {
  detailsOpened = false;
  isAnimating = false;

  grids: GridItem[] = [
    {
      title: "Orange Money",
      number: "",
      imageUrl: "/assets/images/orange_money.png",
    },
    {
      title: "MTN Money",
      number: "",
      imageUrl: "/assets/images/mtn_money.png",
    },
    {
      title: "Airtel Money",
      number: "",
      imageUrl: "/assets/images/wave.png",
    },
    {
      title: "Moov money",
      number: "",
      imageUrl: "/assets/images/moov.png",
    },
  ];
  selectedGrid: number | null = null;

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  toggleGrid(index: number) {
    if (this.selectedGrid === index) {
      this.selectedGrid = null; // Fermer le grid si c'est déjà sélectionné
    } else {
      this.selectedGrid = index; // Ouvrir le nouveau grid
    }
  }

  toggleCheckbox(index: number, event: Event) {
    event.stopPropagation(); // Empêcher la propagation du clic à l'élément parent
    if (this.selectedGrid === index) {
      this.selectedGrid = null; // Décocher si c'est déjà sélectionné
    } else {
      this.selectedGrid = index; // Activer la case à cocher
    }
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
