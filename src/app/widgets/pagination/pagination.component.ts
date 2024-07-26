import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports:[CommonModule],

  templateUrl: './pagination.component.html',
  // styleUrls: ['./pagination.component.css'], // Vous pouvez commenter cette ligne si pas de fichier CSS
})
export class PaginationComponent {
  @Input() totalPages!: number; 
  @Input() totalPage!: number; 
  // Utilisation du non-null assertion operator !

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  currentPage: number = 1;

  constructor() {
    this.totalPages = 0; // Initialisation à 0 ou à une valeur par défaut si nécessaire
  }
  get page(): number[] {
    return Array.from({ length: this.totalPage }, (_, i) => i - 1);
  }
  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitPageChanged();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.emitPageChanged();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.emitPageChanged();
  }

  private emitPageChanged() {
    this.pageChanged.emit(this.currentPage);
  }
}
