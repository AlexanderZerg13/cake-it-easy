import { Bakery } from '../bakeries/model';

export interface IAppState {
  routes?: any;
  bakeries?: any;
  selectedBakery?: Bakery;
  cakes?: any;
  selectedCake?: any;
  basket?: any;
}
