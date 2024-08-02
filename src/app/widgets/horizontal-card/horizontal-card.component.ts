import { Component, OnInit } from "@angular/core";
import { CommonModule, CurrencyPipe, DatePipe } from "@angular/common";
import { OrdersService } from "../../services/orders.service";
import { CardInfo } from "../../utils/types";

@Component({
  selector: "app-horizontal-card",
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: "./horizontal-card.component.html",
  styleUrl: "./horizontal-card.component.scss",
  providers: [OrdersService],
})
export class HorizontalCardComponent implements OnInit {
  protected cardList: CardInfo[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.cardList = this.orderService.getCardHorizontalList();
  }
}
