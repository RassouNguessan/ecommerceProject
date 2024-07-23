import { Injectable } from "@angular/core";
import { info } from "../utils/horizontal-card-mock";
import { CardInfo } from "../utils/types";

@Injectable({
  providedIn: "root",
})
export class OrdersService {
  getCardHorizontalList(): CardInfo[] {
    return info;
  }
}
