export enum ACTIONS_TYPE {
  BAKERIES, CAKES, CAKE
}

export interface IDataList extends IData{
  items: Array<any>;
}

export interface IDataObject extends IData {
  items: object;
}

export interface IData {
  items: any;
  loading: boolean;
  error: any;
}

export interface Bakery {
  id: number;
  name: string;
}

export interface Cake {
  name: String;
  pictureUrl: String;
  description: String;
  cakeSizes: Array<CakeSize>;
  cakeFillings: Array<CakeFilling>;
  cakePrices: Array<CakePrice>;
}

export interface CakeSize {
  description: string;
  id: number;
  name: string;
  shape: number;
  size: number;
  sortNo: number;
}

export interface CakeFilling {
  description: string;
  id: number;
  isDefault: boolean;
  name: string;
}

export interface CakePrice {
  cakeFillingId: number;
  cakeSizeId: number;
  isDeliveryOnly: boolean;
  price: number;
  productId: number;
}
