import { Component, OnInit } from '@angular/core';

import { Bakery } from '../model/bakery';
import { Cake } from '../model/cake';
import { BakeryService } from '../bakery.service';

@Component({
  selector: 'app-cakes-overview',
  templateUrl: './cakes-overview.component.html',
  styleUrls: ['./cakes-overview.component.css']
})
export class CakesOverviewComponent implements OnInit {

  bakeries: Bakery[];

  selectedBakery: Bakery;
  selectedCakes: Cake[];

  constructor(
    private bakeryService: BakeryService
  ) { }

  ngOnInit() {
    this.getBakery();
  }

  itemClick(bakery: Bakery): void {
    this.selectedBakery = bakery;
    this.getCakes(bakery);
  }

  getBakery(): void {
    this.bakeryService.getBakeries()
      .subscribe(bakeries => this.bakeries = bakeries);
  }

  getCakes(bakery: Bakery): void {
    this.bakeryService.getCakes(bakery)
      .subscribe(cakes => { this.selectedCakes = cakes; });
  }
}
