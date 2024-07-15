import { Component, Input, OnInit } from "@angular/core";
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
export class SuccessComponent implements OnInit{
  @Input() sendOptions: Object = {}
  width: string;
  height: string;

  constructor(private location: Location) {
    this.sendOptions = {
      path: "/assets/animations/lotties/success.json",
    };
    this.width = '235px';
    this.height = '235px';
  }
  dataToRetrieve: any;

  ngOnInit() {
    const data: any = this.location.getState();
    this.dataToRetrieve = data['type'];
    console.log("data", this.dataToRetrieve);
  }
}
