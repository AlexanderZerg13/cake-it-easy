export enum ACTIONS_TYPE {
  BAKERIES, CAKES
}

export interface IDataList {
  items: {};
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
