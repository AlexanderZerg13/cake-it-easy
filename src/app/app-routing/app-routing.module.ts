import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CakesOverviewComponent } from '../cakes-overview/cakes-overview.component';
import { CustomizeCakeComponent } from '../customize-cake/customize-cake.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: CakesOverviewComponent },
  { path: 'customize-cake', component: CustomizeCakeComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
