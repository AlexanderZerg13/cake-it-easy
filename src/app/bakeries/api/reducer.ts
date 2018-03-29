import { Action } from 'redux';

import { BakeryAPIAction, BakeryAPIActions } from './actions';
import { IDataList, Bakery, ACTIONS_TYPE } from '../model';

const INITIAL_STATE: IDataList = {
  items: [],
  loading: false,
  error: null,
}

function APIReducer(state: IDataList = INITIAL_STATE, action: BakeryAPIAction) {
  switch (action.type) {
    case BakeryAPIActions.LOAD_STARTED:
      return {
        ...state,
        items: [],
        loading: true,
        error: null,
      };
    case BakeryAPIActions.LOAD_SUCCEEDED:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case BakeryAPIActions.LOAD_FAILED:
      return {
        ...state,
        items: {},
        loading: false,
        error: action.error,
      };
  }

  return state;
}

export function createBakeriesAPIReducer() {
  return function bakeriesReducer(state: IDataList = INITIAL_STATE,
    a: Action): IDataList {
    const action = a as BakeryAPIAction;

    if (action.meta === ACTIONS_TYPE.BAKERIES) {
      return APIReducer(state, action);
    }
    
    return state;
  }
}

export function createSelectedBakeryCakesAPIReducer() {
  return function selectBakeryCakesReducer(state: IDataList = INITIAL_STATE,
    a: Action): IDataList {
    const action = a as BakeryAPIAction;

    if (action.meta === ACTIONS_TYPE.CAKES) {
      return APIReducer(state, action);
    }

    return state;
  }
}

export function createSelectedBakeryReducer() {
  return function selectBakeryReducer(state: Bakery = null, a: Action): Bakery {
    const action = a as BakeryAPIAction;

    if (action.type === BakeryAPIActions.SELECT_BAKERY) {
      return action.payload;
    }

    return state;
  }
}


