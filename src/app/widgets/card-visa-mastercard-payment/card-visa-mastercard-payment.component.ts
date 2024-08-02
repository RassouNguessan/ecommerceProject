import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { GridItem } from "../../utils/types";

@Component({
  selector: "app-card-visa-mastercard-payment",
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: "./card-visa-mastercard-payment.component.html",
  styleUrl: "./card-visa-mastercard-payment.component.scss",
})
export class CardVisaMastercardPaymentComponent {
  detailsOpened: boolean;
  isAnimating: boolean;
  phoneNumber: string;
  cvvNumber: string;
  expiryDate: string;
  expirationDate: string;
  selectedGrid: number | null;

  grids: GridItem[] = [
    {
      title: "Orange Money",
      number: "",
      imageUrl: "./assets/images/orange_money.png",
    },
    {
      title: "MTN Money",
      number: "",
      imageUrl: "./assets/images/mtn_money.png",
    },
    { title: "Airtel Money", number: "", imageUrl: "./assets/images/wave.png" },
    {
      title: "Moov money",
      number: "",
      imageUrl: "./assets/images/moov_money.png",
    },
  ];

  constructor() {
    this.detailsOpened = false;
    this.isAnimating = false;
    this.phoneNumber = "";
    this.cvvNumber = "";
    this.expiryDate = "";
    this.expirationDate = "";
    this.selectedGrid = null;
  }

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
export default CardVisaMastercardPaymentComponent;
