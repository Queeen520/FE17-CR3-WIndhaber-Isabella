import { Component, OnInit } from '@angular/core';
import { menuList } from '../menuList';
import { interfaceMenus } from '../interfaceMenus';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<interfaceMenus> = menuList;

  constructor() {}

  ngOnInit(): void {
  }

}
