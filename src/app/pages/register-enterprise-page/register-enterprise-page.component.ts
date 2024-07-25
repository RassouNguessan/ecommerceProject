import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BackgroundComponent } from "../../widgets/background/background.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { CompanyComponent } from "../../widgets/company/company.component";

@Component({
  selector: 'app-register-enterprise-page',
  standalone: true,
  imports: [NavbarComponent, BackgroundComponent, ImgBlockComponent, CompanyComponent],
  templateUrl: './register-enterprise-page.component.html',
  styleUrl: './register-enterprise-page.component.scss'
})
export class RegisterEnterprisePageComponent {

}
