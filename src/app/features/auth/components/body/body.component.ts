import { Component } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { CommonModule } from '@angular/common';
import { ImgBlockComponent } from '../../../../shared/components/img-block/img-block.component';
import { RegisterComponent } from './forms/register/register.component';
import { IndividualComponent } from './forms/register/individual/individual.component';
import { CompanyComponent } from './forms/register/company/company.component';

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  imports: [
    FormsComponent,
    CommonModule,
    ImgBlockComponent,
    RegisterComponent,
    IndividualComponent,
    CompanyComponent,
  ],
})
export class BodyComponent {
  // @Input() step: string;
  // @Output() myEvent = new EventEmitter();
}
