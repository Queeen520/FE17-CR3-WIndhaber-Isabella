import { Injectable } from '@angular/core';
import { imenus } from './imenus';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  items: imenus[] = [];

  constructor() { }

  placeOrder(product: imenus) {
  this.items.push(product);
  }

}
