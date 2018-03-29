import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { Bakery, ACTIONS_TYPE } from '../model';

export type BakeryAPIAction = FluxStandardAction<any, ACTIONS_TYPE>;


@Injectable()
export class BakeryAPIActions {

  static readonly LOAD_BAKERIES = 'LOAD_BAKERIES';
  static readonly LOAD_SELECTED_BAKERY_CAKES = 'LOAD_SELECTED_BAKERY_CAKES';

  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  static readonly SELECT_BAKERY = 'SELECT_BAKERY';

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

  @dispatch()
  loadSelectedBakeryCakes = (): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SELECTED_BAKERY_CAKES,
    meta: ACTIONS_TYPE.CAKES,
    payload: null,
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