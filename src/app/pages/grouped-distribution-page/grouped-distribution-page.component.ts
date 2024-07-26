import { Component } from "@angular/core";
import { NavbarComponent } from "../../widgets/navbar/navbar.component";
import { DistributedComponent } from "../../widgets/distributed/distributed.component";

@Component({
  selector: "app-grouped-distributionn-page",
  standalone: true,
  imports: [NavbarComponent, DistributedComponent],
  templateUrl: "./grouped-distribution-page.component.html",
  styleUrl: "./grouped-distribution-page.component.scss",
})
export class GroupedDistributionPageComponent {}
