import { Component, OnInit } from '@angular/core';
import { menuList } from '../menuList';
import { interfaceMenus } from '../interfaceMenus';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  menus: Array<interfaceMenus> = menuList;


  constructor() { }

  ngOnInit(): void {
  }

}
