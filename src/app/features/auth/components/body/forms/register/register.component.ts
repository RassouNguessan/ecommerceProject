import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SecMsgComponent } from '../../../../../../shared/components/sec-msg/sec-msg.component';
import { ImgBlockComponent } from '../../../../../../shared/components/img-block/img-block.component';
import { IndividualComponent } from './individual/individual.component';
import { CompanyComponent } from './company/company.component';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    CommonModule,
    RouterLink,
    SecMsgComponent,
    ImgBlockComponent,
    IndividualComponent,
    CompanyComponent,
  ],
})
export class RegisterComponent {
  @Input() type = '';
  @Input() nextStep = '';
  @Input() backStep = '';
  // @Output() registrationEvent = new EventEmitter<string>();
  isRegistration: boolean = true;
  registrationType?: string;

  constructor(private router: Router) {}

  ngOnInit(){
    this.nextStep = 'one';
  }

  isIndividual() {
    const getValue = document.getElementById('individual');
    if (getValue) {
      this.router.navigateByUrl('/register/individual', {
        state: { type: getValue.innerText },
      });
      console.log(getValue.innerText);
    }
  }

  isCompany() {
    const getValue = document.getElementById('company');
    if (getValue) {
      this.router.navigateByUrl('/register/company', {
        state: { type: getValue.innerText },
      });
      console.log(getValue.innerText);
    }
  }

  methodParent(value: boolean) {
    alert('This Boolean is ' + value);
  }

  registrationSubmit() {}
}
