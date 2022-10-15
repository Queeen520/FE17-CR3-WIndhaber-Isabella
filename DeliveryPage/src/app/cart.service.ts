import { Injectable } from '@angular/core';
import { imenus } from './imenus';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  items: Array<imenus> = [];

  constructor() { }

  placeOrder(product: imenus) {
  this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
