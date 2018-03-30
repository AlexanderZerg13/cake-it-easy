import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { Bakery, Cake, CakePrice, ACTIONS_TYPE } from '../model';

export type BakeryAPIAction = FluxStandardAction<any, ACTIONS_TYPE>;


@Injectable()
export class BakeryAPIActions {

  static readonly LOAD_BAKERIES = 'LOAD_BAKERIES';
  static readonly LOAD_SELECTED_BAKERY_CAKES = 'LOAD_SELECTED_BAKERY_CAKES';
  static readonly LOAD_CAKE = 'LOAD_CAKE';

  static readonly SELECT_BAKERY = 'SELECT_BAKERY';
  static readonly ADD_CAKE_TO_BASKET = 'ADD_CAKE_TO_BASKET';
  static readonly REMOVE_CAKE_FROM_BASKET = 'REMOVE_CAKE_FROM_BASKET';

  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  loadBakeres = (): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_BAKERIES,
    meta: ACTIONS_TYPE.BAKERIES,
    payload: null,
  })

  @dispatch()
  selectBakery = (payload: Bakery): BakeryAPIAction => ({
    type: BakeryAPIActions.SELECT_BAKERY,
    meta: null,
    payload,
  })

  // Unuse
  @dispatch()
  loadSelectedBakeryCakes = (): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SELECTED_BAKERY_CAKES,
    meta: ACTIONS_TYPE.CAKES,
    payload: null,
  })

  @dispatch()
  loadSelectedCake = (payload: number): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_CAKE,
    meta: ACTIONS_TYPE.CAKE,
    payload,
  });

  @dispatch()
  addCakeToBasket = (cake: Cake, cakePrice: CakePrice): BakeryAPIAction => ({
    type: BakeryAPIActions.ADD_CAKE_TO_BASKET,
    meta: null,
    payload: { cake, cakePrice },
  })

  @dispatch()
  removeFromBacket = (cakePair): BakeryAPIAction => ({
    type: BakeryAPIActions.REMOVE_CAKE_FROM_BASKET,
    meta: null,
    payload: cakePair,
  })

  loadStarted = (meta: ACTIONS_TYPE): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_STARTED,
    meta,
    payload: null,
  })

  loadSucceeded = (payload: any, meta: ACTIONS_TYPE): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SUCCEEDED,
    meta,
    payload,
  })

  loadFailed = (error, meta: ACTIONS_TYPE): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SUCCEEDED,
    meta,
    payload: null,
    error,
  })

  

  
}