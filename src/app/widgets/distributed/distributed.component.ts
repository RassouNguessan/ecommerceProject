import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { BackButtonComponent } from "../back-button/back-button.component";
import { LottieBagComponent } from "../lottie-bag/lottie-bag.component";

@Component({
  selector: "app-distributed",
  standalone: true,
  imports: [BackButtonComponent, LottieBagComponent, RouterLink],
  templateUrl: "./distributed.component.html",
  styleUrl: "./distributed.component.scss",
})
export class DistributedComponent {
  constructor(private router: Router) {}

  TonextBenefic() {
    this.router.navigate(["./beneficiary-list"]);
  }
}
