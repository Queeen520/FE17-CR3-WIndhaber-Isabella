import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { imenus } from '../imenus';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  formGroup = new FormGroup({

    name: new FormControl(''),
  
    adress: new FormControl(''),
  
  });

  items: Array<imenus> = [];



  constructor(private cs: CartService) {
    
  }


  clearCart() {
    window.alert('Your cart has been cleared');
    this.items = this.cs.clearCart();
  }
  
   onSubmit() {
    console.warn('Your order has been submitted', this.formGroup.value);
    this.items = this.cs.clearCart();
    this.cs.clearCart();
  }

  ngOnInit(): void {
    this.items = this.cs.getItems();
    console.log(this.items);
  }

}
