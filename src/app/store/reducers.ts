import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { createBakeriesAPIReducer,
  createSelectedBakeryReducer,
  createSelectedBakeryCakesAPIReducer,
  createSelectedCakeAPIReducer,
  createBacketReducer } from '../bakeries/api/reducer';

export const rootReducer = combineReducers({
  router: routerReducer,
  bakeries: createBakeriesAPIReducer(),
  selectedBakery: createSelectedBakeryReducer(),
  selectedBakeryCakes: createSelectedBakeryCakesAPIReducer(),
  selectedCake: createSelectedCakeAPIReducer(),
  basket: createBacketReducer(),
});
