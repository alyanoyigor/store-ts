import { Producer, TProduct, TProductList } from '../types';

export const products: TProductList = {
  [Producer.CocaCola]: {
    name: 'Coca Cola',
    price: 29.99,
    producer: Producer.CocaCola,
    amount: 50,
  },
  [Producer.Danone]: {
    name: 'Danone blueberry yogurt drinking 1.5%',
    weight: '800g',
    price: 53.99,
    producer: Producer.Danone,
    amount: 50,
  },
  [Producer.AVK]: {
    name: 'AVK "Trufalie" candies',
    price: 74.49,
    producer: Producer.AVK,
    amount: 50,
  },
  [Producer.Millennium]: {
    name: 'Millennium Favorite milk chocolate',
    weight: '100g',
    price: 29.99,
    producer: Producer.Millennium,
    amount: 50,
  },
};

export const desirableProducts: TProductList = {
  [Producer.CocaCola]: {
    name: 'Coca Cola',
    price: 29.99,
    producer: Producer.CocaCola,
    amount: 10,
  },
  [Producer.Danone]: {
    name: 'Danone blueberry yogurt drinking 1.5%',
    weight: '800g',
    price: 53.99,
    producer: Producer.Danone,
    amount: 10,
  },
  [Producer.AVK]: {
    name: 'AVK "Trufalie" candies',
    price: 74.49,
    producer: Producer.AVK,
    amount: 10,
  },
  [Producer.Millennium]: {
    name: 'Millennium Favorite milk chocolate',
    weight: '100g',
    price: 29.99,
    producer: Producer.Millennium,
    amount: 10,
  },
};

export const customerProducts: TProduct[] = [
  {
    name: 'Millennium Favorite milk chocolate',
    weight: '100g',
    price: 29.99,
    producer: Producer.Millennium,
    amount: 1,
  },
];
