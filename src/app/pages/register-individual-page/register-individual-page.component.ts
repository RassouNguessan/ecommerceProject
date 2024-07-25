import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { BackgroundComponent } from "../../widgets/background/background.component";
import { ImgBlockComponent } from "../../widgets/img-block/img-block.component";
import { FormsComponent } from "../../widgets/forms/forms.component";
import { IndividualComponent } from "../../widgets/individual/individual.component";

@Component({
  selector: 'app-register-individual-page',
  standalone: true,
  imports: [NavbarComponent, BackgroundComponent, ImgBlockComponent, FormsComponent, IndividualComponent],
  templateUrl: './register-individual-page.component.html',
  styleUrl: './register-individual-page.component.scss'
})
export class RegisterIndividualPageComponent {

}
