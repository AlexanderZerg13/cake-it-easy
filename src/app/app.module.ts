import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CakesOverviewComponent } from './cakes-overview/cakes-overview.component'; 

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BakeryService } from './bakery.service';
import { CartComponent } from './cart/cart.component';
import { CustomizeCakeComponent } from './customize-cake/customize-cake.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CakesOverviewComponent,
    BucketComponent,
    CartComponent,
    CustomizeCakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [BakeryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
