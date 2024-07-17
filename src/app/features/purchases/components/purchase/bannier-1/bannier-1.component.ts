import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bannier4Component } from "../bannier-4/bannier-4.component";
import { ImgBlockComponent } from "../../../../../shared/components/img-block/img-block.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-bannier-1',
    standalone: true,
    templateUrl: './bannier-1.component.html',
    styleUrl: './bannier-1.component.scss',
    imports: [Bannier4Component, ImgBlockComponent,CommonModule]
})
export class Bannier1Component {
  isVisible: boolean = false;

  onIs() {
    this.isVisible = !this.isVisible;
  }



  





  constructor(private router:Router){}
  PurchaseOrder() {
    this.router.navigate(['/distributed'])
  }

}
