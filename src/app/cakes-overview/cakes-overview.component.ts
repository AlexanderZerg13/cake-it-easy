import { Component, OnInit } from '@angular/core';

import { Bakery } from '../model/bakery';
import { BakeryService } from '../bakery.service';

@Component({
  selector: 'app-cakes-overview',
  templateUrl: './cakes-overview.component.html',
  styleUrls: ['./cakes-overview.component.css']
})
export class CakesOverviewComponent implements OnInit {

  bakeries: Bakery[];
  bakery: Bakery;

  constructor(
    private bakeryService: BakeryService
  ) { }

  ngOnInit() {
    this.getBakery();
  }

  getBakery(): void {
    this.bakeryService.getBakeries()
      .subscribe(bakeries => this.bakeries = bakeries);
  }

  onItemSelected($event): void {
    this.bakery = $event;
  }
}
