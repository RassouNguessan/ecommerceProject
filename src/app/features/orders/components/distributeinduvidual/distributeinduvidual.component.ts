import { Component,Input,ViewChild,ElementRef } from '@angular/core';
import { BackbuttonComponent } from '../../../../shared/components/backbutton/backbutton.component';
import { Router } from '@angular/router';
import { SecMsgComponent } from '../../../../shared/components/sec-msg/sec-msg.component';
import { CommonModule } from '@angular/common';
import { LoadingChargeComponent } from "../../../../shared/components/loading-charge/loading-charge.component";
import { LottiesComponent } from '../../../../shared/components/lotties/lotties.component';
import { DistributionChannelComponent } from '../distribution-channel/distribution-channel.component';

@Component({
  selector: 'app-distributeinduvidual',
  standalone: true,
  imports: [BackbuttonComponent,
            SecMsgComponent, 
            CommonModule, 
            LoadingChargeComponent,
            LottiesComponent,
            DistributionChannelComponent
          ],
  template:'<app-backbutton/>,<app-lottie-bag/>',
  templateUrl: './distributeinduvidual.component.html',
  styleUrl: './distributeinduvidual.component.scss',
})
export class DistributeinduvidualComponent {


  @Input() sendOptions: Object = {};
  width: string;
  height: string;

  rowNumber: number;
  rows: number[] = [];
  showRemoveButton: boolean = false;

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
    this.showRemoveButton = (this.rowNumber > 1) ? true : false;
  }









  showPopup = false;

  @ViewChild('inputField') inputField!: ElementRef<HTMLInputElement>;
  @ViewChild('copyButton') copyButton!: ElementRef<HTMLButtonElement>;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

 


  inputFields = [1]; // Deux champs de saisie initiaux

  addFields() {
    this.inputFields.push(this.inputFields.length + 1);
  }

  removeFields() {
    if (this.inputFields.length > 1) {
      this.inputFields.pop();
    }
  }



  
  
  groupDistribued() {
    this.router.navigate(['/channeldistrubution'])
  }


}
