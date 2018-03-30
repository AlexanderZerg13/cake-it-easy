import { Component, OnInit } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { BakeryAPIActions } from '../bakeries/api/actions';

import { Cake, CakeSize, CakeFilling, CakePrice } from '../bakeries/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @select(['basket', 'items'])
  readonly cakePairs$: Observable<Array<any>>;

  private sum: number;
  private cakeFilling: CakeFilling;
  private cakeSize: CakeSize;

  constructor(
    private actions: BakeryAPIActions
  ) {}

  ngOnInit() {
    this.cakePairs$.subscribe(arrayCakes => {
      let sum = 0;
      arrayCakes.forEach(cakePair => {
        sum += cakePair.cakePrice.price;
      });
      this.sum = sum;
    })
  }

  removeItem(cakePair): void {
    this.actions.removeFromBacket(cakePair);
  }

  getFilling(cakePair): CakeFilling {
    return cakePair.cake.cakeFillings.find(item => item.id === cakePair.cakePrice.cakeFillingId);
  }

  getSize(cakePair): CakeSize {
    return cakePair.cake.cakeSizes.find(item => item.id === cakePair.cakePrice.cakeSizeId);
  }
}
