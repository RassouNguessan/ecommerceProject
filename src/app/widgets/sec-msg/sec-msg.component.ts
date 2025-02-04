import { CommonModule, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";
import { LottiesComponent } from "../lotties/lotties.component";

@Component({
  selector: "app-sec-msg",
  standalone: true,
  imports: [CommonModule, LottiesComponent, NgStyle],
  templateUrl: "./sec-msg.component.html",
  styleUrl: "./sec-msg.component.scss",
})
export class SecMsgComponent {
  @Input() imagePath: Record<string, unknown> = {};
  width: string;
  height: string;

  constructor() {
    this.imagePath = {
      path: "/assets/animations/shield.json",
    };
    this.width = "35px";
    this.height = "35px";
  }

  closeSecurityMessage() {
    const securityMessage = document.getElementById("securityMessage");
    if (securityMessage) {
      // if (securityMessage.parentElement) {
      //   securityMessage.parentElement.classList.remove('pt-5');
      // }
      securityMessage.classList.add("d-none");
    }
  }
}
