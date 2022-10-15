import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { menus } from '../menus';
import { imenus } from '../imenus';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: imenus = {} as imenus;
  id: number = 0;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = menus[this.id];
    });
  
  }

}
