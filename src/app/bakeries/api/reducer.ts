import { BakeryAPIAction, BakeryAPIActions } from './actions';
import { IDataList } from '../model';
import { Action } from 'redux';

const INITIAL_STATE: IDataList = {
  items: {},
  loading: false,
  error: null,
}

export function createBakeriesAPIReducer() {
  return function bakeriesReducer(state: IDataList = INITIAL_STATE,
    a: Action): IDataList {

    const action = a as BakeryAPIAction;
    switch (action.type) {
      case BakeryAPIActions.LOAD_STARTED:
        return {
          ...state,
          items: {},
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
}
