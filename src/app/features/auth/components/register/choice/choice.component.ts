import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from '../clients/client.component';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [CommonModule, ClientComponent],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.scss'
})
export class ChoiceComponent {
  // @Output() individualEvent = new EventEmitter<boolean>();
  // @Output() companyEvent = new EventEmitter<boolean>();
  isIndividual: boolean = false;
  isCompany: boolean = false;
  isIndex: boolean = false;


  constructor(){
    this.isIndex = true;
  }

  redirectIndividual() {
    this.isIndividual = !this.isIndividual;
    this.isIndex = !this.isIndex;
  }

  redirectCompanyl() {
    this.isIndividual = false;
    this.isIndex = !this.isIndex;
  }

  // @Input() displayIndividual: boolean = true;
  // @Input() displayCompany: boolean = true;
  // @Output() individualEvent = new EventEmitter<boolean>();
  // @Output() companyEvent = new EventEmitter<boolean>();
  // is_individual?: boolean;
  // is_company?: boolean;

  // redirectIndividual() {
  //   this.individualEvent.emit(this.displayIndividual);
  // }

  // redirectCompanyl() {
  //   this.companyEvent.emit(this.displayCompany);
  // }
}
