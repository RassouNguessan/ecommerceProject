import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Location } from "@angular/common";
import { HeaderComponent } from "../header/header.component";
import { LottiesComponent } from "../lotties/lotties.component";

@Component({
  selector: "app-success",
  standalone: true,
  templateUrl: "./success.component.html",
  styleUrl: "./success.component.scss",
  imports: [HeaderComponent, RouterLink, LottiesComponent],
})
export class SuccessComponent {
  @Input() sendOptions: Record<string, unknown> = {};
  width: string;
  height: string;
  dataToRetrieve: Record<string, unknown> = {};

  constructor(private location: Location) {
    this.sendOptions = {
      path: "/assets/animations/lotties/success.json",
    };
    this.width = "235px";
    this.height = "235px";
  }
}
