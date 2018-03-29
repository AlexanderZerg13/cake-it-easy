import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { Bakery } from '../model';

export type BakeryAPIAction = FluxStandardAction<any>;


@Injectable()
export class BakeryAPIActions {

  static readonly LOAD_BAKERIES = 'LOAD_BAKERIES';

  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  static readonly SELECT_BAKERY = 'SELECT_BAKERY';

  @dispatch()
  loadBakeres = (): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_BAKERIES,
    meta: null,
    payload: null,
  })

  loadStarted = (): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_STARTED,
    meta: null,
    payload: null,
  })

  loadSucceeded = (payload: Bakery[]): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SUCCEEDED,
    meta: null,
    payload,
  })

  loadFailed = (error): BakeryAPIAction => ({
    type: BakeryAPIActions.LOAD_SUCCEEDED,
    meta: null,
    payload: null,
    error,
  })

  @dispatch()
  selectBakery = (payload: Bakery): BakeryAPIAction => ({
    type: BakeryAPIActions.SELECT_BAKERY,
    meta: null,
    payload,
  })
}