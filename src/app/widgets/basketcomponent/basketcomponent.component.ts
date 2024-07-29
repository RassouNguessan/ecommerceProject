import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { ORDERS } from "../../utils/mock-card-list";
import { NumberWithSpacesPipe } from "../../pipes/number-with-spaces.pipe";
import { purchasedVoucher } from "../../utils/types";
import { PurchasesService } from "../../services/purchases.service";

@Component({
  selector: "app-basketcomponent",
  standalone: true,
  imports: [RouterLink, CommonModule, NumberWithSpacesPipe],
  templateUrl: "./basketcomponent.component.html",
  styleUrls: ["./basketcomponent.component.scss"],
})
export class BasketComponent implements OnInit {
  @Input() data: string;
  orderedVoucher: purchasedVoucher[];

  constructor(
    private router: Router,
    private purchased: PurchasesService
  ) {
    this.data = "";
    this.orderedVoucher = [];
  }

  ngOnInit(): void {
    this.orderedVoucher = this.purchased.getPurchasedCardList();
  }

  OrderDetails() {
    this.router.navigate(["/order"]);
  }
}
