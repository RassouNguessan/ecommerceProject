import { Component, Input } from '@angular/core';
import { LottiesComponent } from "../../widgets/lotties/lotties.component";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { SuccessComponent } from "../../widgets/success/success.component";
import { BackButtonComponent } from "../../widgets/back-button/back-button.component";

@Component({
  selector: 'app-success-page',
  standalone: true,
  imports: [LottiesComponent, NavbarComponent, SuccessComponent, BackButtonComponent],
  templateUrl: './success-page.component.html',
  styleUrl: './success-page.component.scss'
})
export class SuccessPageComponent {
  @Input() imagePath: Record<string, unknown>;
  width: string;
  height: string

  constructor(){
    this.width = "0";
    this.height = "0";
    this.imagePath = {
      path: "",
    };
  }
}
