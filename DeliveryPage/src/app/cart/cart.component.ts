import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formGroup.valid) {
    var a = this.formGroup.value;
    console.log(a)
     }
    }
}
