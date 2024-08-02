import { Component, Input } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { LottiesComponent } from "../lotties/lotties.component";
import { summaryList } from "../../utils/types";
import { CommonModule } from "@angular/common";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";

@Component({
  selector: "app-beneficiary-list",
  standalone: true,
  imports: [
    LottiesComponent,
    BackButtonComponent,
    CommonModule,
    NumberWithSpacesPipe,
  ],
  templateUrl: "./beneficiary-list.component.html",
  styleUrl: "./beneficiary-list.component.scss",
})
export class BeneficiaryListComponent {
  // private animationItem: AnimationItem | undefined;

  @Input() imagePath: Record<string, unknown>;
  width: string;
  height: string;

  summaryList: summaryList[] = [
    {
      id: 1,
      title: "Nombre de bénéficiaires",
      icon: "/assets/images/members_icon.png",
      people_number: 135,
    },
    {
      id: 2,
      title: "Nombre de bons à distribuer",
      icon: "/assets/images/gift_icon.png",
      number: 153,
    },
    {
      id: 3,
      title: "Montant de la totalité des bons",
      icon: "/assets/images/money_icon.png",
      amount: 1120000,
    },
    {
      id: 4,
      title: "Nombre de categorie des Bons",
      icon: "/assets/images/forms_icon_2.png",
      category: 4,
    },
    {
      id: 5,
      title: "Nombre de canal de distribution",
      icon: "/assets/images/uncompleted_box_icon.png",
      canal: 2,
    },
  ];

  vouchers = [
    {
      amount: 10000,
      available: 100,
      purchased: 90,
    },
    {
      amount: 15000,
      available: 200,
      purchased: 13,
    },
    {
      amount: 20000,
      available: 50,
      purchased: 30,
    },
    {
      amount: 25000,
      available: 10,
      purchased: 0,
    },
    {
      amount: 30000,
      available: 500,
      purchased: 20,
    },
    {
      amount: 200000,
      available: 5,
      purchased: 0,
    },
  ];

  constructor() {
    this.imagePath = {
      path: "/assets/animations/ANIME -AAABBBB-2 (1).json",
    };
    this.width = "35px";
    this.height = "35px";
  }
}
