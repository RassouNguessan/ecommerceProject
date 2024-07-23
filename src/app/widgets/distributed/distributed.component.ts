import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { LottieBagComponent } from "../lottie-bag/lottie-bag.component";

@Component({
  selector: "app-distributed",
  standalone: true,
  imports: [BackbuttonComponent, LottieBagComponent, RouterLink],
  templateUrl: "./distributed.component.html",
  styleUrl: "./distributed.component.scss",
})
export class DistributedComponent {
  constructor(private router: Router) {}

  TonextBenefic() {
    this.router.navigate(["./beneficiary-list"]);
  }
}
