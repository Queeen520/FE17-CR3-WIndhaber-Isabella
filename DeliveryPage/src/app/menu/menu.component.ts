import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { interfaceMenus } from '../interfaceMenus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<interfaceMenus> = menus;

  constructor() {}

  ngOnInit(): void {
  }

}
