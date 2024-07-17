import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-img-block',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './img-block.component.html',
  styleUrl: './img-block.component.scss'
})
export class ImgBlockComponent {
  imageURI ?: string;

  constructor() {
    this.imageURI = './assets/images/Groupe 16336@2x.png'
  }

}
