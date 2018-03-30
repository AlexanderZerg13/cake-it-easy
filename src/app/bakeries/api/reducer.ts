import { Action } from 'redux';

import { BakeryAPIAction, BakeryAPIActions } from './actions';
import { IData, IDataList, IDataObject, IBasket, Bakery, Cake, ACTIONS_TYPE } from '../model';

const STATUS_STATE = {
  loading: false,
  error: null,
}

const INITIAL_STATE_LIST: IDataList = {
  items: [],
  ...STATUS_STATE,
}

const INITIAL_STATE_OBJECT: IData = {
  items: null,
  ...STATUS_STATE,
}

const INITIAL_STATE_BASKET: IBasket = {
  items: [],
}

function APIReducer(state: IData, initialState: IData, action: BakeryAPIAction) {
  switch (action.type) {
    case BakeryAPIActions.LOAD_STARTED:
      return {
        ...state,
        items: initialState.items,
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
        items: initialState.items,
        loading: false,
        error: action.error,
      };
  }

  return state;
}

export function createBakeriesAPIReducer() {
  return function bakeriesReducer(state: IDataList = INITIAL_STATE_LIST,
    a: Action): IDataList {
    const action = a as BakeryAPIAction;

    if (action.meta === ACTIONS_TYPE.BAKERIES) {
      return APIReducer(state, INITIAL_STATE_LIST, action);
    }
    
    return state;
  }
}

export function createSelectedBakeryCakesAPIReducer() {
  return function selectBakeryCakesReducer(state: IDataList = INITIAL_STATE_LIST,
    a: Action): IDataList {
    const action = a as BakeryAPIAction;

    if (action.meta === ACTIONS_TYPE.CAKES) {
      return APIReducer(state, INITIAL_STATE_LIST, action);
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

export function createSelectedCakeAPIReducer() {
  return function selectCakeReducer(state: IDataObject = INITIAL_STATE_OBJECT,
    a: Action): IDataObject {
    const action = a as BakeryAPIAction;

    if (action.meta === ACTIONS_TYPE.CAKE) {
      return APIReducer(state, INITIAL_STATE_OBJECT, action);
    }

    return state;
  }
}

export function createBacketReducer() {
  function getInitialState(): IBasket {
    let items = localStorage.getItem('basket');
    if (items) {
      return {items: JSON.parse(items)};
    }
    return INITIAL_STATE_BASKET;
  }

  return function backetReducer(state: IBasket = getInitialState(), a: Action): IBasket {
    const action = a as BakeryAPIAction;

    if (action.type === BakeryAPIActions.ADD_CAKE_TO_BASKET) {
      let items = [...state.items, action.payload];
      localStorage.setItem('basket', JSON.stringify(items));
      return {
        ...state,
        items: items,
      }
    } else if (action.type === BakeryAPIActions.REMOVE_CAKE_FROM_BASKET) {
      let items = [...state.items.filter((item, i) => i !== state.items.indexOf(action.payload), 1)]
      localStorage.setItem('basket', JSON.stringify(items));
      return {
        ...state,
        items: items,
      }
    }

    return state;
  }
}
