import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { imenus } from '../imenus';
import { CartService } from '../cart.service';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<imenus> = menus;
  product: imenus = {} as imenus;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cs: CartService) {
   //console.table(menus);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = menus[this.id];
    });

  }
  
  placeOrder(product: any) {
    alert("Your product has been added to the cart!");
    this.cs.placeOrder(product);
  }
}
