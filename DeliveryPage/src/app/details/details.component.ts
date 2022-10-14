import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { menus } from '../menus';
import { interfaceMenus } from '../interfaceMenus';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: interfaceMenus = {} as interfaceMenus;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  placeOrder() {
    window.alert('Your product has been added to the cart!');
    this.cartService.placeOrder(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = menus[this.id];
    });
  
  }

}
