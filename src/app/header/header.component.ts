import { Component, OnInit } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { Cake, CakeSize, CakeFilling, CakePrice } from '../bakeries/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @select(['basket', 'items'])
  readonly cakes$: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
