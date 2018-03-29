import { Component, OnInit } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { BakeryAPIActions } from '../bakeries/api/actions';
import { Bakery, Cake } from '../bakeries/model';

export const sortBakeries = (bakeryDictionary$: Observable<{}>) =>
  bakeryDictionary$

@Component({
  selector: 'app-cakes-overview',
  templateUrl: './cakes-overview.component.html',
  styleUrls: ['./cakes-overview.component.css']
})
export class CakesOverviewComponent implements OnInit {

  @select$(['bakeries', 'items'], sortBakeries)
  readonly bakeries$: Observable<Bakery[]>;

  @select(['bakeries', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['bakeries', 'error'])
  readonly error: Observable<any>;

  selectedBakery: Bakery;
  selectedCakes: Cake[];

  constructor(private actions: BakeryAPIActions) {}

  ngOnInit() {
    this.actions.loadBakeres();
  }

  itemClick(bakery: Bakery): void {
    this.selectedBakery = bakery;
  }
}
