import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { Bakery } from '../model';

type Payload = Bakery[]
export type BakeryAPIAction = FluxStandardAction<Payload>;


@Injectable()
export class BakeryAPIActions {
  static readonly LOAD_BAKERIES = 'LOAD_BAKERIES';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

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

  loadSucceeded = (payload: Payload): BakeryAPIAction => ({
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
}