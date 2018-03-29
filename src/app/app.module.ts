import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// This app's Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CakesOverviewComponent } from './cakes-overview/cakes-overview.component';
import { CartComponent } from './cart/cart.component';
import { CustomizeCakeComponent } from './customize-cake/customize-cake.component';

// This app's mgModules
import { StoreModule } from './store/module';
import { BakeryModule } from './bakeries/module';

// This app's routes
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CakesOverviewComponent,
    CartComponent,
    CustomizeCakeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    NgbModule.forRoot(),
    BakeryModule,
    StoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
