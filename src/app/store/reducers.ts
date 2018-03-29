import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import { createBakeriesAPIReducer, 
  /*createSelectedBakeryReducer, 
  createCakesAPIReducer,
  createCakeAPIReducer*/ } from '../bakeries/api/reducer';

export const rootReducer = combineReducers({
  bakeries: createBakeriesAPIReducer(),
  router: routerReducer,
  /*selectedBakery: createSelectedBakeryReducer(),
  cakes: createCakesAPIReducer(),
  selectedCake: createCakeAPIReducer(),*/
});
