import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakeryAPIActions } from './api/actions';
import { BakeryAPIEpics } from './api/epics';
import { BakeryAPIService } from './api/service';
import { StoreModule } from '../store/module';

@NgModule({
  imports: [CommonModule, StoreModule],
  providers: [BakeryAPIActions, BakeryAPIEpics, BakeryAPIService]
})
export class BakeryModule {}
