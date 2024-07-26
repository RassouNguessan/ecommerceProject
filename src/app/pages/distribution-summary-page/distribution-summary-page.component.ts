import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { FrameComponent } from "../../widgets/frame/frame.component";
import { summaryList } from "../../utils/types";
import { CommonModule } from "@angular/common";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";

@Component({
  selector: "app-distribution-summary-page",
  standalone: true,
  imports: [
    NavbarComponent,
    FrameComponent,
    CommonModule,
    NumberWithSpacesPipe,
  ],
  templateUrl: "./distribution-summary-page.component.html",
  styleUrl: "./distribution-summary-page.component.scss",
})
export class DistributionSummaryPageComponent {
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
}
