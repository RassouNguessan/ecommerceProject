import { Injectable } from '@angular/core';
import { purchasedVoucher } from '../utils/types';
import { ORDERS } from '../utils/mock-card-list';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  getPurchasedCardList(): purchasedVoucher[] {
    return ORDERS;
  }


}
