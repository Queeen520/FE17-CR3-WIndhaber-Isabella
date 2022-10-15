import { Component, OnInit } from '@angular/core';
import { menus } from '../menus';
import { imenus } from '../imenus';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: imenus[] = menus;

  constructor() {
    console.table(menus);

  }


  ngOnInit(): void {
  }

}
