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

  @select(['bakeries', 'items'])
  readonly bakeries$: Observable<Bakery[]>;

  @select(['bakeries', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['bakeries', 'error'])
  readonly error: Observable<any>;

  @select(['selectedBakery'])
  readonly selectedBakery$: Observable<Bakery>;

  @select(['selectedBakeryCakes', 'items'])
  readonly selectedBakeryCakes$: Observable<Cake>;

  constructor(private actions: BakeryAPIActions) {}

  ngOnInit() {
    this.actions.loadBakeres();
  }

  itemClick(bakery: Bakery): void {
    this.actions.selectBakery(bakery);
  }
}
