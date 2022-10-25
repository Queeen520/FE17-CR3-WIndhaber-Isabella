import { Injectable } from '@angular/core';
import { imenus } from './imenus';
import { menus } from './menus'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  items: Array<imenus> = [];


  constructor() { }

  placeOrder(product: any) {
  this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  total() {
    let total: number = 0.00;
    for (let sum of this.items) {
    total = total + sum.price;
    }

    return total;
  }

  count() {
    return this.items.length;
  }

}
