import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-banner-4",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./banner-4.component.html",
  styleUrl: "./banner-4.component.scss",
})
export class Banner4Component {
  @Input() bannerClass?: string;

  constructor(){
    this.bannerClass = '';
  }
}
