import { Injectable } from '@angular/core';
import { interfaceMenus } from './interfaceMenus';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  items: interfaceMenus[] = [];

  constructor() { }

  placeOrder(product: interfaceMenus) {
  this.items.push(product);
  }

}
