import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DistributionChannelComponent } from "../distribution-channel/distribution-channel.component";
import { BackbuttonComponent } from "../backbutton/backbutton.component";
import { SecMsgComponent } from "../sec-msg/sec-msg.component";
import { LoadingChargeComponent } from "../loading-charge/loading-charge.component";
import { LottiesComponent } from "../lotties/lotties.component";

@Component({
  selector: "app-distributeinduvidual",
  standalone: true,
  imports: [
    BackbuttonComponent,
    SecMsgComponent,
    CommonModule,
    LoadingChargeComponent,
    LottiesComponent,
    DistributionChannelComponent,
  ],
  templateUrl: "./distributeinduvidual.component.html",
  styleUrl: "./distributeinduvidual.component.scss",
})
export class DistributeinduvidualComponent {
  @ViewChild("inputField") inputField!: ElementRef<HTMLInputElement>;
  @ViewChild("copyButton") copyButton!: ElementRef<HTMLButtonElement>;
  @Input() sendOptions: Record<string, unknown> = {};
  width: string;
  height: string;
  rowNumber: number;
  rows: number[] = [];
  showRemoveButton = false;
  showPopup = false;
  inputFields = [1]; // Deux champs de saisie initiaux

  constructor(private router: Router) {
    this.sendOptions = {
      path: "/assets/animations/lotties/distributed_bag.json",
    };
    this.width = "464px";
    this.height = "463px";
    this.rowNumber = 1;
  }

  addRow() {
    this.rowNumber++;
    this.rows.push(this.rowNumber);
    console.log("Button ++", this.rowNumber);
    this.checkRow();
  }

  removeRow() {
    this.rowNumber--;
    this.rows.pop();
    console.log("Button --", this.rowNumber);
    this.checkRow();
  }

  checkRow() {
    this.showRemoveButton = this.rowNumber > 1;
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  addFields() {
    this.inputFields.push(this.inputFields.length + 1);
  }

  removeFields() {
    if (this.inputFields.length > 1) {
      this.inputFields.pop();
    }
  }

  groupDistribued() {
    this.router.navigate(["/channeldistrubution"]);
  }
}
