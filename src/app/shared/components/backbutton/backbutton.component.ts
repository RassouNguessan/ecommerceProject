import { Component } from "@angular/core";
import { Location } from "@angular/common";



@Component({
  selector: 'app-backbutton',
  standalone: true,
  imports: [BackbuttonComponent],
  templateUrl: './backbutton.component.html',
  styleUrl: './backbutton.component.scss'
})
export class BackbuttonComponent {
  constructor(private location: Location){}

  goBack(): void {
    this.location.back()
  }

}
