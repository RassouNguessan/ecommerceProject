import { Component, Input } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { LottiesComponent } from "../lotties/lotties.component";

@Component({
  selector: "app-beneficiary-list",
  standalone: true,
  imports: [LottiesComponent, BackButtonComponent],
  templateUrl: "./beneficiary-list.component.html",
  styleUrl: "./beneficiary-list.component.scss",
})
export class BeneficiaryListComponent {
  // private animationItem: AnimationItem | undefined;

  @Input() imagePath: Record<string, unknown>;
  width: string;
  height: string;
  // successListe: any;

  // options: AnimationOptions = {
  //   path: "/assets/lotties/ANIME -AAABBBB-2 (1).json",
  //   loop: true,
  //   autoplay: true,
  // };


  constructor() {
    this.imagePath = {
      path: "/assets/animations/ANIME -AAABBBB-2 (1).json",
    };
    this.width = "35px";
    this.height = "35px";
  }

  // animationCreated(animationItem: AnimationItem): void {
  //   this.animationItem = animationItem;
  // }
}
