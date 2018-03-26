import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CakesOverviewComponent } from './cakes-overview/cakes-overview.component'; 

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BakeryService } from './bakery.service';
import { BucketComponent } from './bucket/bucket.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CakesOverviewComponent,
    BucketComponent
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
