import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BakeryAPIActions } from '../bakeries/api/actions';

import { Cake } from '../bakeries/model';

@Component({
  selector: 'app-customize-cake',
  templateUrl: './customize-cake.component.html',
  styleUrls: ['./customize-cake.component.css']
})
export class CustomizeCakeComponent implements OnInit {

  cake: Cake;

  constructor(
    private route: ActivatedRoute,
    private actions: BakeryAPIActions,
  ) { }

  ngOnInit():void {
    this.getCake();
  }

  getCake(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    /*this.bakeryService.getCake(id)
      .subscribe(cake => this.cake = cake);*/
  }

}
