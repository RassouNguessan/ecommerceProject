import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  standalone: true,
  imports: [],
  templateUrl: './heart.component.html',
  styleUrl: './heart.component.scss'
})
export class HeartComponent implements OnInit{
  favorite: boolean;
  @Input() isFavorite: boolean;

  constructor(){
    this.favorite = false;
    this.isFavorite = false;
  }

  ngOnInit(): void {
    this.checkFavorite(this.isFavorite)
  }

  toggleColor() {
    this.favorite = !this.favorite;
  }

  checkFavorite(favorite: boolean){
    if(favorite){
      this.favorite = favorite;
    }
  }
}
