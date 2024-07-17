import { Injectable } from '@angular/core';
import { CardInfo } from '../models/cartInfo';
import { info } from '../horizontal-card-mock';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  

  getCardHorizontalList(): CardInfo[]{
    return info;
  }

  constructor() { }

  
}


