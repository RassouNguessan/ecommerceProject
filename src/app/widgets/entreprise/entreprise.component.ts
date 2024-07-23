import { Component } from "@angular/core";
import { LottieComponent, AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-entreprise",
  standalone: true,
  imports: [LottieComponent],
  templateUrl: "./entreprise.component.html",
  styleUrl: "./entreprise.component.scss",
})
export class EntrepriseComponent {
  options: AnimationOptions = {
    path: "assets/animations/panier.json",
    loop: true,
    autoplay: true,
  };
}
