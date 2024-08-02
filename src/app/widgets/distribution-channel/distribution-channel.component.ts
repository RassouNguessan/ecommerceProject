import { CommonModule } from "@angular/common";
import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-distribution-channel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./distribution-channel.component.html",
  styleUrl: "./distribution-channel.component.scss",
})
export class DistributionChannelComponent {
  showPopup = false;

  @ViewChild("inputField") inputField!: ElementRef<HTMLInputElement>;
  @ViewChild("copyButton") copyButton!: ElementRef<HTMLButtonElement>;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }
}
