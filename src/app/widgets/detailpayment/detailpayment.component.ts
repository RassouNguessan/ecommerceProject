import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";

@Component({
  selector: "app-detailpayment",
  standalone: true,
  imports: [CommonModule, NumberWithSpacesPipe],
  templateUrl: "./detailpayment.component.html",
  styleUrls: ["./detailpayment.component.scss"],
})
export class DetailpaymentComponent {
  // Déclaration et initialisation du tableau avec des valeurs en dur
  payments = [{ id: 1, service: 'achat de bon', montant: 5000000, frais: 5000, total: 5005000 }];
}
