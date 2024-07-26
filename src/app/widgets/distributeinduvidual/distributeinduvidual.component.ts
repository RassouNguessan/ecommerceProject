import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";
import { Router, RouterLink } from "@angular/router";
import { SecMsgComponent } from "../../widgets/sec-msg/sec-msg.component";
import { CommonModule } from "@angular/common";
import { LoadingChargeComponent } from "../../widgets/loading-charge/loading-charge.component";
import { LottiesComponent } from "../../widgets/lotties/lotties.component";
import { DistributionChannelComponent } from "../distribution-channel/distribution-channel.component";

@Component({
  selector: "app-distributeinduvidual",
  standalone: true,
  imports: [
    BackButtonComponent,
    SecMsgComponent,
    CommonModule,
    LoadingChargeComponent,
    LottiesComponent,
    DistributionChannelComponent,
    RouterLink
  ],
  templateUrl: "./distributeinduvidual.component.html",
  styleUrl: "./distributeinduvidual.component.scss",
})
export class DistributeinduvidualComponent {
  @Input() imagePath: Record<string, unknown>;

  @ViewChild("inputField") inputField!: ElementRef<HTMLInputElement>;
  @ViewChild("copyButton") copyButton!: ElementRef<HTMLButtonElement>;

  showPopup = false;
  // inputFields = []; // Deux champs de saisie initiaux

  width: string;
  height: string;

  rowNumber: number;
  rows: number[] = [1];
  showRemoveButton: boolean;

  constructor(private router: Router) {
    this.imagePath = {
      path: "/assets/animations/distributed_bag.json",
    };
    this.width = "464px";
    this.height = "463px";
    this.rowNumber = 1;
    this.showRemoveButton = false;
  }

  addRow() {
    if (this.rows.length < 3) {
      this.rows.push(this.rowNumber++);
      this.checkRow();
    }
  }

  removeRow() {
    this.rowNumber--;
    this.rows.pop();
    this.checkRow();
  }

  checkRow() {
    this.showRemoveButton = this.rowNumber > 1 ? true : false;
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  // addFields() {
  //   this.inputFields.push(this.inputFields.length + 1);
  // }

  // removeFields() {
  //   if (this.inputFields.length > 1) {
  //     this.inputFields.pop();
  //   }
  // }

  groupDistribued() {
    this.router.navigate(["/channeldistrubution"]);
  }
}
