import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  @Input() displayIndividual: boolean = true;
  @Input() displayCompany: boolean = true;
  @Output() individualEvent = new EventEmitter<boolean>();
  @Output() companyEvent = new EventEmitter<boolean>();
  is_individual?: boolean;
  is_company?: boolean;

  redirectIndividual() {
    this.individualEvent.emit(this.displayIndividual);
  }

  redirectCompanyl() {
    this.companyEvent.emit(this.displayCompany);
  }
}
