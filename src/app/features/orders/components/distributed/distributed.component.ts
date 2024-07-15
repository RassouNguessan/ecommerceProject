import { Component, Input } from "@angular/core";
import { LottiesComponent } from "../../../../shared/components/lotties/lotties.component";
import { LottieBagComponent } from "../../../../shared/animations/lottie-bag/lottie-bag.component";
import { SecMsgComponent } from "../../../../shared/components/sec-msg/sec-msg.component";
import { BackbuttonComponent } from "../../../../shared/components/backbutton/backbutton.component";

@Component({
  selector: "app-distributed",
  standalone: true,
  imports: [BackbuttonComponent, LottiesComponent, SecMsgComponent, LottieBagComponent],
  templateUrl: "./distributed.component.html",
  styleUrl: "./distributed.component.scss",
})
export class DistributedComponent {
  @Input() sendOptions: Object = {};
  width: string;
  height: string;

  constructor() {
    this.sendOptions = {
      path: "./assets/animations/lotties/distributed_bag.json",
    };
    this.width = '464px';
    this.height = '463px';
  }
}