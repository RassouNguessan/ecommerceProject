import { Component, Input } from '@angular/core';
import { BackButtonComponent } from "../back-button/back-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [BackButtonComponent, CommonModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  @Input() frameClass: string;

  constructor(){
    this.frameClass = '';
  }

}
