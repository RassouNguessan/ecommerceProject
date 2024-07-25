import { Component } from '@angular/core';
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DistributeinduvidualComponent } from "../../widgets/distributeinduvidual/distributeinduvidual.component";
import { DistributionChannelComponent } from "../../widgets/distribution-channel/distribution-channel.component";

@Component({
  selector: 'app-distribution-page',
  standalone: true,
  imports: [NavbarComponent, DistributeinduvidualComponent, DistributionChannelComponent],
  templateUrl: './distribution-page.component.html',
  styleUrl: './distribution-page.component.scss'
})
export class DistributionPageComponent {

}
