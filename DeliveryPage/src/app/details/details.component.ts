import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { menus } from '../menus';
import { imenus } from '../imenus';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  menus: Array<imenus> = menus;
  product: imenus = {} as imenus;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cs: CartService) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = menus[this.id];
    });
  
  }

  placeOrder() {
    alert("Your product has been added to the cart!");
    this.cs.placeOrder(this.product);
  }

}
