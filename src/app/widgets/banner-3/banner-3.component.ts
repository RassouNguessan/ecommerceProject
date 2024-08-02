import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-banner-3",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./banner-3.component.html",
  styleUrl: "./banner-3.component.scss",
})
export class Banner3Component {
  @Input() bannerClass?: string;

  constructor(){
    this.bannerClass = '';
  }
}
