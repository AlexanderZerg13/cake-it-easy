import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { trigger, state, style, animate, transition, query, animateChild } from '@angular/animations';


import { BakeryAPIActions } from '../bakeries/api/actions';

import { Cake, CakeSize, CakeFilling, CakePrice } from '../bakeries/model';

@Component({
  selector: 'app-customize-cake',
  templateUrl: './customize-cake.component.html',
  styleUrls: ['./customize-cake.component.css'],
  animations: [
    trigger('cakeSize', [
      state('inactive', style({
        transform: 'scale(1)',
        background: '#aaaaaa'
      })),
      state('active', style({
        transform: 'scale(1.1)',
        background: '#5faea7'
      })),
      transition('inactive <=> active', animate('100ms ease-in'))
    ]),
  ]
})
export class CustomizeCakeComponent implements OnInit {

  private selectedSize: CakeSize;
  private selectedFilling: CakeFilling;
  private price: CakePrice;
  private cake: Cake;

  @select(['selectedCake', 'items'])
  readonly cake$: Observable<Cake>;

  constructor(
    private route: ActivatedRoute,
    private actions: BakeryAPIActions,
  ) {}

  ngOnInit():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.actions.loadSelectedCake(id);
    this.cake$.subscribe(cake => this.cake = cake);
  }

  selectSize(size: CakeSize): void {
    this.selectedSize = size;
    this.findPrice();
  }

  selectFilling(filling: CakeFilling): void {
    this.selectedFilling = filling;
    this.findPrice();
  }

  findPrice() {
    if (!this.selectedFilling || !this.selectedSize) {
      return;
    }

    this.price = this.cake.cakePrices.find(cakePrice => {
      if (cakePrice.cakeSizeId === this.selectedSize.id &&
        cakePrice.cakeFillingId === this.selectedFilling.id) {
        return true;
      }
    })
  }

  addMore(): void {
    if (!this.selectedFilling || !this.selectedSize) {
      return;
    }

    this.actions.addCakeToBasket(this.cake, this.price);
  }
}
