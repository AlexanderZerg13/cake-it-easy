import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BakeryService } from '../bakery.service';

import { Cake } from '../model/cake';

@Component({
  selector: 'app-customize-cake',
  templateUrl: './customize-cake.component.html',
  styleUrls: ['./customize-cake.component.css']
})
export class CustomizeCakeComponent implements OnInit {

  cake: Cake;

  constructor(
    private route: ActivatedRoute,
    private bakeryService: BakeryService,
  ) { }

  ngOnInit():void {
    this.getCake();
  }

  getCake(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bakeryService.getCake(id)
      .subscribe(cake => this.cake = cake);
  }

}
