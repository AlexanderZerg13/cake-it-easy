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
  imageUrl: String;
}
