import { Component, OnInit } from '@angular/core';
import { menuList } from '../menus';
import { interfaceMenus } from '../interfaceMenus';


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
