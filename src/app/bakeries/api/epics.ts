import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { IAppState } from '../../store/model';
import { BakeryAPIService } from './service';
import { BakeryAPIAction, BakeryAPIActions } from './actions';

@Injectable()
export class BakeryAPIEpics {
  constructor(
    private service: BakeryAPIService,
    private actions: BakeryAPIActions,
  ) {}

  public createEpicBakeries() {
    return createEpicMiddleware(this.createLoadBakeryEpic());
  }

  private createLoadBakeryEpic(): Epic<BakeryAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(BakeryAPIActions.LOAD_BAKERIES)
      .switchMap(() => this.service.getBakeries()
        .map(data => this.actions.loadSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.loadStarted()))
  }
}