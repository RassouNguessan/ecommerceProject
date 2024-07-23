import { Component, Output, EventEmitter, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-register-index",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterIndexComponent {
  @Input() displayIndividual = true;
  @Input() displayCompany = true;
  @Output() individualEvent = new EventEmitter<boolean>();
  @Output() companyEvent = new EventEmitter<boolean>();

  redirectIndividual() {
    this.individualEvent.emit(this.displayIndividual);
  }

  redirectCompanyl() {
    this.companyEvent.emit(this.displayCompany);
  }
}
