import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';


import { BakeryAPIActions } from '../bakeries/api/actions';

import { Cake } from '../bakeries/model';

@Component({
  selector: 'app-customize-cake',
  templateUrl: './customize-cake.component.html',
  styleUrls: ['./customize-cake.component.css']
})
export class CustomizeCakeComponent implements OnInit {

  @select(['selectedCake', 'items'])
  readonly cake$: Observable<Cake>;

  constructor(
    private route: ActivatedRoute,
    private actions: BakeryAPIActions,
  ) {}

  ngOnInit():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.actions.loadSelectedCake(id);
  }
}
