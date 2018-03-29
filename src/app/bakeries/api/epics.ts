import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { IAppState } from '../../store/model';
import { BakeryAPIService } from './service';
import { BakeryAPIAction, BakeryAPIActions } from './actions';
import { ACTIONS_TYPE } from '../model';

const bakeriesNotAlreadyFetched = (
  state: IAppState): boolean => !(
    state.bakeries &&
    state.bakeries.items &&
    Object.keys(state.bakeries.items).length);

@Injectable()
export class BakeryAPIEpics {
  constructor(
    private service: BakeryAPIService,
    private actions: BakeryAPIActions,
  ) {}

  public createEpicBakeries() {
    return createEpicMiddleware(this.createLoadBakeryEpic());
  }

  public createEpicSelectedBakeryCakes() {
    return createEpicMiddleware(this.createLoadSelectedBakeryEpic());
  }

  private createLoadBakeryEpic(): Epic<BakeryAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(BakeryAPIActions.LOAD_BAKERIES)
      .filter(() => bakeriesNotAlreadyFetched(store.getState()))
      .switchMap(() => this.service.getBakeries()
        .map(data => this.actions.loadSucceeded(data, ACTIONS_TYPE.BAKERIES))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status, 
        }, ACTIONS_TYPE.BAKERIES)))
        .startWith(this.actions.loadStarted(ACTIONS_TYPE.BAKERIES)))
  }

  private createLoadSelectedBakeryEpic(): Epic<BakeryAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(BakeryAPIActions.SELECT_BAKERY)
      .switchMap((action) => this.service.getCakes(action.payload)
        .map(data => this.actions.loadSucceeded(data, ACTIONS_TYPE.CAKES))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        }, ACTIONS_TYPE.CAKES)))
        .startWith(this.actions.loadStarted(ACTIONS_TYPE.CAKES)))
  }
}