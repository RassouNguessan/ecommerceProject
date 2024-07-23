import { Component, Input } from "@angular/core";

@Component({
  selector: "app-channeldistribution",
  standalone: true,
  imports: [],
  templateUrl: "./channeldistribution.component.html",
  styleUrl: "./channeldistribution.component.scss",
})
export class ChanneldistributionComponent {
  @Input() modal = false;
}
