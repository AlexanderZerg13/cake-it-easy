import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { createBakeriesAPIReducer,
  createSelectedBakeryReducer,
  createSelectedBakeryCakesAPIReducer,
  /*createCakesAPIReducer,
  createCakeAPIReducer*/ } from '../bakeries/api/reducer';

export const rootReducer = combineReducers({
  router: routerReducer,
  bakeries: createBakeriesAPIReducer(),
  selectedBakery: createSelectedBakeryReducer(),
  selectedBakeryCakes: createSelectedBakeryCakesAPIReducer(),
  /*cakes: createCakesAPIReducer(),
  selectedCake: createCakeAPIReducer(),*/
});
