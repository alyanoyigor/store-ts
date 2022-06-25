export interface IPerson {
  name: string;
}

export enum Producer {
  CocaCola = 'CocaCola',
  Danone = 'Danone',
  Millennium = 'Millennium',
  AVK = 'AVK',
}
let nameOfA = Producer[Producer.CocaCola as keyof typeof Producer];
export type TProduct = {
  name: string;
  price: number;
  amount: number;
  producer: Producer;
  weight?: string;
};

export type TProductList = {
  [key in keyof typeof Producer]: TProduct;
};
