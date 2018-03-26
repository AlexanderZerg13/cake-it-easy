import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CakesOverviewComponent } from './cakes-overview/cakes-overview.component'; 
import { CartComponent } from './cart/cart.component';
import { CustomizeCakeComponent } from './customize-cake/customize-cake.component';

import { BakeryService } from './bakery.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CakesOverviewComponent,
    CartComponent,
    CustomizeCakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    DropdownModule
  ],
  providers: [BakeryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
