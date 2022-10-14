import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { interfaceMenus } from '../interfaceMenus';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: interfaceMenus[] = menus;
  product: interfaceMenus = {} as interfaceMenus;

  constructor(private cartService: CartService) {}

  placeOrder() {
    window.alert('Your product has been added to the cart!');
    this.cartService.placeOrder(this.product);
  }

  ngOnInit(): void {
  }

}
