import { CakesOverviewComponent } from './cakes-overview/cakes-overview.component';
import { CustomizeCakeComponent } from './customize-cake/customize-cake.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: CakesOverviewComponent },
  { path: 'customize-cake/:id', component: CustomizeCakeComponent },
  { path: 'basket', component: CartComponent },
];
